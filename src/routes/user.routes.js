// import express from "express";
// import connectionDB from "../db/index.js";

// const app = express();

// // Connect to MongoDB
// connectionDB();

// app.listen(5000, () => {
//   console.log("🚀 Server running on port 5000");
// });

import { Router } from "express";
const router=Router()
// import{upload}from "../middlewares/multer.js"
import {upload} from "../middlewares/multer.js"
import {registerUser}from "../controllers/user.js"
router.route('/register').post(
  upload.fields([{name:"avatar",maxCount:1},{name:"coverImage",maxCount:1}]),
  registerUser)


export default router