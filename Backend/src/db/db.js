import mongoose from "mongoose";
async function connectDB() {
 try {
  mongoose.connect(process.env.MONGO_URI);
  console.log("Database connected successfully");
 } catch (error) {
  console.log("Connection failed - ", error);
 }
}

export default connectDB;