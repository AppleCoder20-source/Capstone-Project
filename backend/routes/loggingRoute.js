
import express from "express";
import Users from "../models/Register.mjs"
const router = express.Router();

router.post('/login', async (req, res) => {
    console.log('POST /apis/login called with:', req.body);

    const { email, password } = req.body;
    try {
        const user = await Users.findOne({ email });
        if (!user) {
            console.log('User not found:', email);
            return res.status(404).json({ msg: "User not found. Please sign up!" });
        }

        if (password !== user.password) {
            console.log('Incorrect password for:', email);
            return res.status(400).json({ msg: "Incorrect password!" });
        }

        console.log('Login successful for:', email);
        res.status(200).json({ msg: "Login successful" });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ msg: "Server error" });
    }
});
export default router;