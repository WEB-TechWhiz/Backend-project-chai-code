import express from "express";
import connectionDB from "../db/index.js";

const app = express();

// Connect to MongoDB
connectionDB();

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
