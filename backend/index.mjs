// index.js
import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import  OpenAI from "openai";
// Load environment variables from .env file
dotenv.config();


const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());


const openai = new OpenAI();

// Define the system prompt for a generic chat assistant
const systemPrompt = `
You are a helpful and knowledgeable assistant. Your task is to engage in a conversation with the user, providing clear, accurate, and relevant information based on their input. Follow these guidelines:

1. Understand the user's intent and respond appropriately.
2. Provide detailed and informative answers to the user's questions.
3. Maintain a friendly and professional tone throughout the conversation.
4. Ensure clarity and coherence in your responses.
5. If you need more information to answer a question, ask the user for clarification.
6. Avoid providing sensitive or inappropriate content.
7. Strive to be concise while thorough in your explanations.
`;

// POST endpoint for chat
app.get('/', async (req, res) => {
  res.send("Hello from the other side")

});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
