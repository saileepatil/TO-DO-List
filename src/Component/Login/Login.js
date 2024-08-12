import React,{useEffect,useState} from 'react';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import axios from 'axios';
import {Link} from 'react-router-dom'
import './Login.css'


function Login() {

    let [userData , setUserData] = useState({ Email: "" , Password: ""});
    let [loginStatus, setLoginStatus] = useState({ status : null , Message: ""});

const handleChange = (field,value) => {
    setUserData({...userData ,  [field] : value})
console.log(field, value);
}

const loginUser =() => {
    axios.post(`http://localhost:5000/api/login` ,  userData)
    .then((res) => {
        if(res.data.Success){
            setLoginStatus({status : true , Message: res.data.Success})

        }else{
            setLoginStatus({status : false , Message: res.data.Error})

        }
    })
}

  return (
<>
<div className='wrapper'>
<form>
    <h1>Login</h1>
   
    <div className='input-box'>
        <input
        onChange={(e) => {
            handleChange("Email" , e.target.value)
        }}
        type='email' placeholder='Email' required/>
        <MdEmail className='icon'/>
    </div>
    <div className='input-box'>
        <input 
         onChange={(e) => {
            handleChange("Password" , e.target.value)
        }}
        type='password' placeholder='Password' required/>
        <FaLock className='icon'/>
    </div>

    <div className='remember-forgot'>
<lable><input type='checkbox'/> Remember Me</lable>
<a href='#'>Forgot Password</a>
    </div>

  
<Link to = '/home'>   <button 
   onClick={() => {
    loginUser();
   }}
   type='submit'> Login</button></Link>

   <div className='register-link'>
    <p>Don't have an account? <a href='#'>Register</a></p>
   </div> 

   {loginStatus.status == true ? <p style={{color : "green"}}> {loginStatus.Message}</p>:""} 
   {loginStatus.status == false ? <p style={{color : "red"}}> {loginStatus.Message}</p>:""} 

</form>
</div>
</>
)
}

export default Login;