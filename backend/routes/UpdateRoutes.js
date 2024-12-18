import express from "express";
import Users from "../models/Register.mjs";
const router = express.Router();

router.delete('/clear/:name', async (req, res) => {
    try {
        const getName = req.params.name; // retrieve the name from the route parameter

        // Find the user by name and delete them
        const deletedUser = await Users.findOneAndDelete({ name: getName });

        if (!deletedUser) {
            return res.status(404).json({ msg: "User not found" });
        }
        res.status(200).json({msg: "Successfully deleted user by name", user: deletedUser}); 
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ msg: error.message || "Server error" });
    }
});
export default router;