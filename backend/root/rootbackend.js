import express from "express"
const app = express();
import cookieparser from "cookie-parser"
app.use(cookieparser())
app.use(express.json())
import login from "../login/login.js";
import register from "../register/register.js";

app.use("/register",register);
app.use("/log_in",login)

app.listen(3000,()=>{
    console.log("server is running on port no. 3000")
})

