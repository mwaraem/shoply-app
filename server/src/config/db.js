import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, { dbName: 'mern-shop' });
    console.log('Mongo connected');
};