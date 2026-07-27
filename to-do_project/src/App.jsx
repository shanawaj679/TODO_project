import "./App.css"
import {BrowserRouter, Routes,Route } from "react-router-dom";
import Login from "./login/login.jsx"
import Register from "./register/register.jsx";
import Forgetpassword from "./forgetpassword/forgetpassword.jsx";
function App(){
    return <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
      </Routes>
      </BrowserRouter>
    </>
}
export default App;