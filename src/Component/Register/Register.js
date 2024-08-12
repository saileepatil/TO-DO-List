import React,{useState , useEffect} from 'react';
import { FaUser  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Register.css';


function Register() {

    let [userData , SetUserData] = useState({ Name:"" , Email:"" , Password:""});

    const handleChange = (field , value) => {
        SetUserData({ ...userData , [field] : value})
     console.log( field, value);
    }

    const registerUser = () => {
         axios.post(`http://localhost:5000/api/register` , userData )
         .then((res) => {
                 console.log(res);
                //  if(res.data.Success){
                //     let registerbtn = document.getElementById("register-btn")
                //     registerbtn.style.opacity = 0.3
                //  }
         })
    }
  return (
<>
<div className='wrapper'>
<form>
    <h1>Sign Up</h1>

    <div className='input-box'>
        <input 
        onChange={(e)=> {
            handleChange ( "Name" , e.target.value)
        }}
        type='text' placeholder='Name' required/>
        <FaUser  className='icon'/>
    </div>

    <div className='input-box'>
        <input
         onChange={(e)=> {
            handleChange ("Email" , e.target.value)
        }}
        type='email' placeholder='Email' required/>
        <MdEmail className='icon'/>
    </div>

    <div className='input-box'>
        <input 
         onChange={(e)=> {
            handleChange ("Password" , e.target.value)
        }}
        type='password' placeholder='Password' required/>
        <FaLock className='icon'/>
    </div>

    {/* <div className='remember-forgot'>
<lable><input type='checkbox'/> Remember Me</lable>
<a href='#'>Forgot Password</a>
    </div> */}

  <Link to = '/login'> <button 
//    id='register-btn'

   onClick={() =>{
  
    registerUser();
   }}
   type='submit'> SignUp</button></Link>

   <div className='register-link'>
    <p> Have an account? <a href='#'>Login</a></p>
   </div>
</form>
</div>
</>
)
}

export default Register;