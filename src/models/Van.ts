import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IVan extends Document {
  type: string;
  size: string;
  availableCount: number;
  waitingCharges: number;
  handballCharges: number;
  weightSupport: number;
  areaCoverage: string;
  createdAt: Date;
  updatedAt: Date;
}

const VanSchema = new Schema<IVan>(
  {
    type: {
      type: String,
      required: [true, 'Van type is required'],
      enum: ['Small', 'Large', 'X Large'],
      unique: true,
    },
    size: {
      type: String,
      required: [true, 'Van size is required'],
    },
    availableCount: {
      type: Number,
      required: [true, 'Available count is required'],
      min: [0, 'Available count cannot be negative'],
    },
    waitingCharges: {
      type: Number,
      required: [true, 'Waiting charges are required'],
      min: [0, 'Waiting charges cannot be negative'],
    },
    handballCharges: {
      type: Number,
      required: [true, 'Handball charges are required'],
      min: [0, 'Handball charges cannot be negative'],
    },
    weightSupport: {
      type: Number,
      required: [true, 'Weight support is required'],
      min: [0, 'Weight support cannot be negative'],
    },
    areaCoverage: {
      type: String,
      required: [true, 'Area coverage is required'],
    },
  },
  {
    timestamps: true,
  }
);

const Van: Model<IVan> =
  mongoose.models.Van || mongoose.model<IVan>('Van', VanSchema);

export default Van;
