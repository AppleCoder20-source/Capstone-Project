
import express from "express";
import Users from "../models/Register.mjs"
const router = express.Router();

router.post('/login', async(req,res) => {
    const { name, userName, email, password } = req.body;

    try{
        const loggingin = await Users.findOne({name,email,userName,password})
        if(!loggingin){
            return res.status(404).json({msg:"Sign Up or fill out the form properly!"}) //handles cases where user leaves blank or doesnt fill up form properly 
            
        }
        res.status(201).json({msg:'Status: Sucess',loggingin})
    }catch(err){
        res.status(500).json({ msg: err.message || "Server error" });
    }
});
export default router;
