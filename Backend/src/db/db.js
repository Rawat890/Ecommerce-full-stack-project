import mongoose from "mongoose";
import { MONGO_URI } from "../config/config.js";
import { promises as dns } from 'node:dns';

dns.setServers(['8.8.8.8', '1.1.1.1']);

async function connectDB() {
 try {
  await mongoose.connect(MONGO_URI);
  console.log("Database connected successfully");
 } catch (error) {
  console.log("Connection failed - ", error);
 }
}

export default connectDB;