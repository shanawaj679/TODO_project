import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
import db from "../config/database.js";

const router=express.Router();
router.post("/",async (req,res)=>{
try{

       const{email,password}=req.body;
    if(!email||!password){
        return res.status(404).json({message:"enter valid credentials"})
    }
    if(!email.includes("@")||!email.includes(".")){
        return res.status(404).json({message:"please check your email"})
    }
    const user_email = email.trim();
    const [user] = await db.query("select id,password from user_info where email = ?",[user_email])
    if(user.length===0){
        return res.status(404).json({message:"user not exists! register first"})
    }
    const user_password_compare = await bcrypt.compare(password,user[0].password)
    if(!user_password_compare){
        return res.status(404).json({message:"wrong credentials. please check your password"})
    }
   const jwtoken = jwt.sign(
    { id: user[0].id},
    process.env.JWT_KEY,
    {expiresIn: "30d"}
);
res.cookie("token", jwtoken, {
    httpOnly: true,
    sameSite:"lax",
    maxAge: 30 * 24 * 60 * 60 * 1000, 
});
const [user_login_time] = await db.query("insert into log_user(id,login_time) values (?,now())",[user[0].id])
 
res.status(200).json({message:"login successfull"})
}
catch(err){
    console.log(err)
    return res.status(500).json({message:"internal server error"})
}
})