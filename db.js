import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connection successfully.");
  } catch (err) {
    throw new Error("DB connection error:", err);
  }
};
