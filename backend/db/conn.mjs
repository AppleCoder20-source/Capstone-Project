import mongoose from 'mongoose';
const connectionString = process.env.ATLAS_URI || `mongodb://127.0.0.1:27017/finance`;

async function connects() {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

export default connects;