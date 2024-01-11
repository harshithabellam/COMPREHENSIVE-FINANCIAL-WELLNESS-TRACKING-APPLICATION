import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = 'mongodb+srv://harika:JOjtn1nFOJavUdJU@cluster0.9binvli.mongodb.net/?retryWrites=true&w=majority';

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}