import express from "express";
import Users from "../models/Register.mjs";
const router = express.Router();
//Do one more  route here  PATCH, 
//Will Make a Settings Page for the Update info and delete 
//

router.get('/:id', async (req,res) => {
    try{
     const getID = req.params.id
     const getUsers = await Users.findById(getID, { _id:1, name:1, userName:1, email:1}) //exclude password for users protection
     res.status(200).json({msg: "Succesfully retrieved User ID", user: getUsers});
    } catch(error){
        console.error("Signup error:", error);
        res.status(500).json({ msg: error.message || "Server error" });
    }
})
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
router.patch('/update', async (req,res) => {
    const {userName, email, password } = req.body;
    try{
        const UpdateUser = await Users.updateOne({userName, email, password})
        res.status(200).json({msg: "User updated account successfully", user: UpdateUser});
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ msg: error.message || "Server error" });
    }
}
)
export default router;