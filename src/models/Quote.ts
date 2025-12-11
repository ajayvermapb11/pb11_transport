import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IQuote extends Document {
  customerName: string;
  email: string;
  phone: string;
  pickupLocation: string;
  dropLocation: string;
  date: Date;
  time: string;
  vanType: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  estimatedPrice?: number;
  adminNotes?: string;
  adminResponse?: string;
  respondedAt?: Date;
  respondedBy?: string;
  userId?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const QuoteSchema = new Schema<IQuote>(
  {
    customerName: {
      type: String,
      required: [true, 'Customer name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please provide a valid email address',
      ],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    pickupLocation: {
      type: String,
      required: [true, 'Pickup location is required'],
      trim: true,
    },
    dropLocation: {
      type: String,
      required: [true, 'Drop location is required'],
      trim: true,
    },
    date: {
      type: Date,
      required: [true, 'Date is required'],
    },
    time: {
      type: String,
      required: [true, 'Time is required'],
    },
    vanType: {
      type: String,
      required: [true, 'Van type is required'],
      enum: ['Small', 'Large', 'X Large'],
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected', 'completed'],
      default: 'pending',
    },
    estimatedPrice: {
      type: Number,
      min: [0, 'Price cannot be negative'],
    },
    adminNotes: {
      type: String,
      trim: true,
    },
    adminResponse: {
      type: String,
      trim: true,
    },
    respondedAt: {
      type: Date,
    },
    respondedBy: {
      type: String,
      trim: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Quote: Model<IQuote> =
  mongoose.models.Quote || mongoose.model<IQuote>('Quote', QuoteSchema);

export default Quote;
