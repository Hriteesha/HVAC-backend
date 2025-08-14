import mongoose from "mongoose"; 
import dotenv from "dotenv";

dotenv.config()
export const connected_to_db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to DB ${process.env.MONGO_URL}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}