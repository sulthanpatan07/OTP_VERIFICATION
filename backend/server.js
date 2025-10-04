import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// 1️⃣ CORS setup for frontend
app.use(cors({
  origin: "https://otp-verification-1-wkr4.onrender.com", // your frontend URL
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));
app.options("*", cors()); // handle preflight requests

// 2️⃣ Body parser
app.use(express.json());

// 3️⃣ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// 4️⃣ OTP route example
app.post("/api/otp/send", (req, res) => {
  const { email } = req.body;
  // Your OTP logic here
  res.json({ success: true, message: `OTP sent to ${email}` });
});

// 5️⃣ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
