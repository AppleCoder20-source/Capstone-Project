import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoute from "./routes/chatRoute.js"; 
import signupRoute from "./routes/SignUpRoute.mjs";
import Login from "./routes/loggingRoute.js";

import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const ATLAS_URI = process.env.ATLAS_URI;

mongoose.connect(ATLAS_URI 
)
  .then(() => {
    console.log('MongoDB connection established:', ATLAS_URI);

  })
  .catch((err) => {
    console.log("Mongo Connection issues", err);
  })


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/chat", chatRoute);
app.use("/api", signupRoute); 
app.use("/api", Login); 



// Root route for testing
app.get("/", (req, res) => {
  res.send("Server is running! Welcome to AI Chat API.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
