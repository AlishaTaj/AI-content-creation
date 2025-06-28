import express from "express";
import { generateContent, analyzeSentiment, fetchTrends } from "../controllers/contentController.js";

const router = express.Router();

router.post("/generate", generateContent);
router.post("/sentiment", analyzeSentiment);
router.get("/trends", fetchTrends);

export default router;
