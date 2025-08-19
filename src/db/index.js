import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const string = process.env.MONGODB_URI;

const connectionDB = async () => {
  try {
    if (!string) {
      throw new Error("❌ MONGODB_URI is missing. Check your .env file.");
    }

    const connectionInstance = await mongoose.connect(string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected:", connectionInstance.connection.host);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectionDB;

import express from "express";
// import connectionDB from "../db/index";

const app = express();

// Connect to MongoDB
connectionDB();

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});









// export default connectionDB;
