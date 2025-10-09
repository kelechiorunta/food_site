import mongoose from 'mongoose';

// DATABASE CONNECTION
export const connectDB = async (DB_URL: string): Promise<void> => {
  try {
    await mongoose.connect(DB_URL);
    console.log('Database connection successful');
  } catch (error) {
    console.error('Connection Failed', error);
    process.exit(1); //Close connection with failure
  }
};
