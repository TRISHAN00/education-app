import mongoose from "mongoose";

export async function dbConnection() {
  try {
    const conn = await mongoose.connect(String(process.env.MONGO_URI));
    return conn;
  } catch (error) {
    console.log(error);
  }
}
