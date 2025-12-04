import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "";

export const connectDB = async () => {
  if (!MONGO_URI) throw new Error("MONGO_URI no definida en .env");
  await mongoose.connect(MONGO_URI);
  console.log("MongoDB conectado");
};