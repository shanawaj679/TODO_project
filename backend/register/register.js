import express from "express"
import bcrypt from "bcryptjs";
import db from "../config/database.js";
const router = express.Router();
router.post("/",async (req,res)=>{
    try{
         const {name,email,password,confirmpassword}=req.body;
         if(!name||!email||!password||!confirmpassword){
            return res.status(400).json({message:"all the feilds are required"})
         }
         if(!email.includes("@")||!email.includes(".")){
            return res.status(404).json({message:"re-check your email"})
         }
         const user_password = password.trim();
         const user_c_password = confirmpassword.trim()
         const user_email = email.trim()
         if(user_password.length<8){
           return res.status(404).json({message:"password length must be greater then 8 char"})
         }
         if(user_password!==user_c_password){
            return res.status(404).json({message:"password do not match"})
         }
         const [user] = await db.query("select id from user_info where email = ?",[user_email])
         if(user.length>0){
            return res.status(409).json({message:"user exists! please login"})
         }
         else{
              const hashedpassword = await bcrypt.hash(user_password,10)
              const [user_insert] = await db.query("insert into user_info(name,email,password) values (?,?,?)",[name,user_email,hashedpassword])
              return res.status(201).json({message:"registration complete"})
         }
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:"internal server error"})
    }
})

export default router