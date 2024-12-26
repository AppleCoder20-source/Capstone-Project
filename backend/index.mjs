import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoute from "./routes/chatRoute.js";
import signupRoute from "./routes/SignUpRoute.mjs";
import Login from "./routes/loggingRoute.js";
import Update from "./routes/UpdateRoutes.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const ATLAS_URI = process.env.ATLAS_URI;
const FRONTEND_URL = process.env.VITE_API_URL || "http://localhost:3001"; 

mongoose.connect(ATLAS_URI)
    .then(() => {
        console.log('MongoDB connection established:', ATLAS_URI);
    })
    .catch((err) => {
        console.error("Mongo Connection issues", err);
    });

app.use(cors({
    origin: FRONTEND_URL, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true, 
}));
app.use(express.json()); 

// Routes
app.use("/api/chat", chatRoute);
app.use("/api", signupRoute);
app.use("/apis", Login); // Mount the login route
app.use("/update", Update);

app.use(express.static(path.join(__dirname, 'client', 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

// Root route for testing
app.get("/", (req, res) => {
    res.send("Server is running! Welcome to AI Chat API.");
});

app.use((err, req, res, next) => {
    console.error("Server error:", err); // Log the full error
    res.status(500).json({ msg: "Server error" }); 
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});