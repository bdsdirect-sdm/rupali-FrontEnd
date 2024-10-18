import React from 'react';
import { useLocation,useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from'axios';

function Profile()
{
const{email}=useParams();
const[user,setUser] = useState('');
 useEffect(()=>{
    const fetchUser=async()=>{
        const res=await axios.get(`https://localhost:8081/profile/${email}`);
    };
    fetchUser();
},[email]);

return user ?(
    <div>
        <h1>Profile Page</h1>
        <p><strong>FirstName</strong>{user.firstName}</p>
        <p><strong>LastName</strong>{user.firstName}</p>
        <p><strong>email</strong>{user.firstName}</p>
        <p><strong>DateofBirth</strong>{user.firstName}</p>
        <p><strong>PhoneNumber</strong>{user.firstName}</p>
        <p><strong>Gender</strong>{user.firstName}</p>
    </div>
):(
  <p>loading</p>
);

};

export default Profile;
