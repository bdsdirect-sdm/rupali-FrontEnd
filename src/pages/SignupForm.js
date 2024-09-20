import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';


function Signup()
{
const navigate=useNavigate();
    const[signup, setSignup] =useState({
        firstName:'', lastName:'',email:'', phone:'',gender:'',dob:'',termsAccepted:true
      });
        
const[errorMessage,setErrorMessage]=useState('')

    const handleChange= (e) =>{
        const{name,value} = e.target;
      
        setSignup({
          ...Signup,[name]:value
        });
      };
    
      const handleSubmit = async(e) => {
    
        e.preventDefault();


        try{
            const response = await fetch('http://localhost:3001/signup',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(Signup),
            });
    
            const result = await response.json();
            if(response.ok){
                navigate('/profile', { state:{user:signup}});
          }else{
            setErrorMessage (result.message);
    
          }
       } catch(error){
        setErrorMessage('Signup failed.Please try again.');
       }
    
      }
   

 
    return(
        <div>
           <form onSubmit={handleSubmit}>
    
    <input type="text" placeholder=" enter first name"name="firstName" value={Signup.firstName} onChange={handleChange} required/>
    <input type="text" placeholder=" enter lastName"name="lastName" value={Signup.lastName} onChange={handleChange} required/>
    <input type="text" placeholder ="enter email"name="email" value={Signup.email} onChange={handleChange} required/>
    <input type="text" placeholder="confirm password"name="password" value={Signup.password} onChange={handleChange} required/>
    <input type="text" placeholder="enter dob"name="dob" value={Signup.dob} onChange={handleChange} required/>
    <input type="text" placeholder="male & female"name="gender" value={Signup.gender} onChange={handleChange} required/>
    <input type="text" placeholder="enter phone number"name="phone" value={Signup.phone} onChange={handleChange} required/>
    

<button type="submit">Submit</button>
  </form>


        </div>
    );

};

export default Signup;