import express from "express";
import Users from "../models/Register.mjs";
const router = express.Router();
//Do the other 3 routes here GET, PATCH and DELETE, 
//also need to make one more page I believe 
//

router.post('/signup', async (req, res) => {
    const { name, userName, email, password } = req.body;
    try {
        const newUser = await Users.create({ name, userName, email, password });
        res.status(201).json({ msg: "User created", user: newUser });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ msg: error.message || "Server error" });
    }
});
export default router;