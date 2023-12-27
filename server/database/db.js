import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MongoDB_URL = process.env.MONGODB_URL;

const DBConnection = async () => {
    try {
        if (!MongoDB_URL) {
            throw new Error('MongoDB_URL is not defined. Check your environment variables.');
        }

        await mongoose.connect(MongoDB_URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;
