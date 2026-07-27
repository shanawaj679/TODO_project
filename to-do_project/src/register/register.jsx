import "./register.css"
import {motion} from "framer-motion"
import { useState,useEffect } from "react"
import {Link} from "react-router-dom"
import axios from "axios"
function Register(){
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [confirmpassword,setconfirmpassword]=useState("")
const fadeup={initial:{opacity:0,scale:0.95},
            whileInView:{opacity:1,scale:1},
            transition:{duration:0.6},
            viewport:{once:false},
          }
    return <>
        <div className="register_container">
          <header>
            <motion.div {...fadeup} className="logo">SN.</motion.div>
             <motion.div {...fadeup}
            transition={{...fadeup.transition,duration:0.65}} className="register_welcome"> Create Your Account </motion.div>
            <motion.div {...fadeup}
            transition={{...fadeup.transition,duration:0.7}} className="register_content"> Build better habits, one task at a time. </motion.div>
          </header>
          <main>
             <div>
               <motion.div {...fadeup} transition={{...fadeup.transition,duration:0.75}} className="reg_label">Name : </motion.div>
              <motion.div {...fadeup} transition={{...fadeup.transition,duration:0.8}}><input type="text" placeholder="name" value={name} onChange={(e)=>{setname(e.target.value)}} className="reg_input"></input></motion.div>
               <motion.div {...fadeup} 
transition={{...fadeup.transition,duration:0.85}} className="reg_label">Email : </motion.div>
              <motion.div {...fadeup} transition={{...fadeup.transition,duration:0.9}}><input type="email" placeholder="shanawaj@gmail.com" value={email} onChange={(e)=>{setemail(e.target.value)}} className="reg_input"></input></motion.div>
               <motion.div {...fadeup} 
transition={{...fadeup.transition,duration:0.95}} className="reg_label">Password : </motion.div>
              <motion.div {...fadeup} transition={{...fadeup.transition,duration:1}}><input type="password" placeholder="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} className="reg_input"></input></motion.div>
               <motion.div {...fadeup} 
transition={{...fadeup.transition,duration:1.05}} className="reg_label">Confirm Password : </motion.div>
              <motion.div {...fadeup} transition={{...fadeup.transition,duration:1.1}}><input type="text" placeholder="password" value={confirmpassword} onChange={(e)=>{setconfirmpassword(e.target.value)}} className="reg_input"></input></motion.div>
                 <motion.div> <motion.button whileHover={{ scale: 1.03, y: -2 }}
               whileTap={{ scale: 0.97 }} 
               className="register_btn">Register</motion.button> </motion.div>
              <motion.div >Have an account already? <Link className="links" to="/">Log In</Link></motion.div>
             </div>
          </main>
        </div>
    </>
}
export default Register