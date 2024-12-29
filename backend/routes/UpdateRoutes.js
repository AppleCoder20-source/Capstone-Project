import express from "express";
import Users from "../models/Register.mjs"; 
const router = express.Router();

router.delete('/clear/:name', async (req, res) => {
  try {
    const getName = req.params.name; 

    // Find user by name and delete
    const deletedUser = await Users.findOneAndDelete({ name: getName });

    if (!deletedUser) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json({
      msg: "Successfully deleted user by name",
      user: deletedUser
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ msg: error.message || "Server error" });
  }
});

router.patch('/update', async (req, res) => {
  const { currentName, newName, email, password, userName } = req.body;
  
  try {
    // 1) Find by currentName
    // 2) Update name to newName
    const updatedUser = await Users.findOneAndUpdate(
      { name: currentName },         
      { 
        name: newName,          
        email,
        password,
        userName
      },
      { new: true }               // return updated doc
    );

    if (!updatedUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.status(200).json({
      msg: "User updated account successfully",
      user: updatedUser
    });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ msg: error.message || "Server error" });
  }
});

export default router;
