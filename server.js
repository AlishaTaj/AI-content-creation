import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contentRoutes from "./routes/content.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

console.log("✅ MONGO_URI:", process.env.MONGO_URI);
console.log("✅ OPENAI_API_KEY:", !!process.env.OPENAI_API_KEY);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Zore.ai Backend is Running 🚀");
});

app.use("/api", contentRoutes);

// Debug: Show registered API routes
app._router.stack.forEach((r) => r.route && console.log("📌 Route:", r.route.path));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error("❌ MongoDB connection failed:", err.message);
});
