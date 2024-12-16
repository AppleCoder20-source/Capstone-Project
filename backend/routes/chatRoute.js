import express from "express";
import { Chat } from "./api.js"; 

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    await Chat(req, res); 
  } catch (error) {
    console.error("Error in chatRoute:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
