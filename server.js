import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const app = express();

// ✅ Middleware
app.use(cors()); // or use cors(corsOptions)
app.use(express.json());

// ✅ Simple test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Server is working without route imports!" });
});

// ✅ Products test route
app.get("/api/products/getallproducts", (req, res) => {
  res.json({
    message: "Products API is working!",
    products: [],
  });
});

// ✅ MongoDB connection
async function connectdb() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Database is connected");
  } catch (e) {
    console.error("DB connection error:", e.message);
  }
}

// ✅ Start server
app.listen(PORT, () => {
  console.log("Server is running on", PORT);
  connectdb();
});
