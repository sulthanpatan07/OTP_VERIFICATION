import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import otpRoutes from "./routes/otp.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"));

app.use("/api/otp", otpRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
