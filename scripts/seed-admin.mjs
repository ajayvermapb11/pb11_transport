import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '../.env.local') });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI is not defined in .env.local');
  process.exit(1);
}

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  isVerified: Boolean,
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', UserSchema);

const superAdminData = {
  name: 'Super Admin',
  email: 'admin@pb11transport.com',
  password: 'Admin@123456',
  role: 'admin',
  isVerified: true,
};

async function seedSuperAdmin() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    const existingAdmin = await User.findOne({ email: superAdminData.email });

    if (existingAdmin) {
      console.log('⚠️  Super Admin already exists!');
      console.log('📧 Email:', superAdminData.email);
      console.log('🔑 Password: [Use existing password or update manually]');
      console.log('\nIf you want to reset the password, delete this user from MongoDB and run the seeder again.');
      process.exit(0);
    }

    console.log('🔄 Hashing password...');
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(superAdminData.password, salt);

    console.log('🔄 Creating Super Admin...');
    const superAdmin = await User.create({
      ...superAdminData,
      password: hashedPassword,
    });

    console.log('\n✅ Super Admin created successfully!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📧 Email:    ', superAdminData.email);
    console.log('🔑 Password: ', superAdminData.password);
    console.log('👤 Name:     ', superAdmin.name);
    console.log('🆔 ID:       ', superAdmin._id);
    console.log('👔 Role:     ', superAdmin.role);
    console.log('✓  Verified: ', superAdmin.isVerified);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('\n⚠️  IMPORTANT: Save these credentials securely!');
    console.log('⚠️  Change the password after first login!\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding Super Admin:', error);
    process.exit(1);
  }
}

seedSuperAdmin();
