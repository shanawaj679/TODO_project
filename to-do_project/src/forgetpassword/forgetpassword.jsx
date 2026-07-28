import "./forgetpassword.css"
import { useState,useEffect } from "react"
import {motion} from "framer-motion"
function Forgetpassword(){
  const [otp,setotp]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [confirmpassword,setconfirmpassword]=useState("")
const fadeup={initial:{opacity:0,scale:0.95},
            whileInView:{opacity:1,scale:1},
            transition:{duration:0.6},
            viewport:{once:false},
          }
return <>
<div className="forgetpassword_container">
<div className="forgetpassword">
 <motion.div {...fadeup} 
transition={{...fadeup.transition,duration:0.85}} className="log_label">OTP : </motion.div>
              <motion.div {...fadeup} transition={{...fadeup.transition,duration:0.9}}><input type="email" placeholder="******" value={otp} onChange={(e)=>{setotp(e.target.value)}} className="log_input"></input></motion.div>
 <motion.div {...fadeup} 
transition={{...fadeup.transition,duration:0.85}} className="log_label">Email : </motion.div>
              <motion.div {...fadeup} transition={{...fadeup.transition,duration:0.9}}><input type="email" placeholder="shanawaj@gmail.com" value={email} onChange={(e)=>{setemail(e.target.value)}} className="log_input"></input></motion.div>
               <motion.div {...fadeup} 
transition={{...fadeup.transition,duration:0.95}} className="log_label">Password : </motion.div>
              <motion.div {...fadeup} transition={{...fadeup.transition,duration:1}}><input type="password" placeholder="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} className="log_input"></input></motion.div>
              <motion.div {...fadeup} 
transition={{...fadeup.transition,duration:0.95}} className="log_label">Confirm Password : </motion.div>
              <motion.div {...fadeup} transition={{...fadeup.transition,duration:1}}><input type="password" placeholder="password" value={confirmpassword} onChange={(e)=>{setconfirmpassword(e.target.value)}} className="log_input"></input></motion.div>
             
              <motion.div> <motion.button whileHover={{ scale: 1.03, y: -2 }}
               whileTap={{ scale: 0.97 }} 
               className="login_btn">change password</motion.button> </motion.div>
          </div>  
          </div>
</>
}
export default Forgetpassword