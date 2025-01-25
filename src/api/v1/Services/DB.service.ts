import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI: string = process.env.MONGO_URI!;

export const connectDB = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("Connect Database MongoDb");
    })
    .catch((error) => {
      console.error(error.message);
    });
};
