import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const VanSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ['Small', 'Large', 'X Large'],
      unique: true,
    },
    size: {
      type: String,
      required: true,
    },
    availableCount: {
      type: Number,
      required: true,
      min: 0,
    },
    waitingCharges: {
      type: Number,
      required: true,
      min: 0,
    },
    handballCharges: {
      type: Number,
      required: true,
      min: 0,
    },
    weightSupport: {
      type: Number,
      required: true,
      min: 0,
    },
    areaCoverage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Van = mongoose.models.Van || mongoose.model('Van', VanSchema);

const vans = [
  {
    type: 'Small',
    size: '2.4m',
    availableCount: 1,
    waitingCharges: 10,
    handballCharges: 10,
    weightSupport: 900,
    areaCoverage: 'Berkshire to anywhere in UK',
  },
  {
    type: 'Large',
    size: '4m',
    availableCount: 3,
    waitingCharges: 15,
    handballCharges: 15,
    weightSupport: 1150,
    areaCoverage: 'Berkshire to anywhere in UK',
  },
  {
    type: 'X Large',
    size: '4.4m',
    availableCount: 3,
    waitingCharges: 15,
    handballCharges: 20,
    weightSupport: 1150,
    areaCoverage: 'Berkshire to anywhere in UK',
  },
];

async function seedVans() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB successfully');

    // Clear existing vans
    await Van.deleteMany({});
    console.log('Cleared existing van data');

    // Insert new vans
    const createdVans = await Van.insertMany(vans);
    console.log(`Successfully seeded ${createdVans.length} vans:`);
    createdVans.forEach((van) => {
      console.log(`- ${van.type}: ${van.size}, ${van.availableCount} available`);
    });

    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding vans:', error);
    await mongoose.connection.close();
    process.exit(1);
  }
}

seedVans();
