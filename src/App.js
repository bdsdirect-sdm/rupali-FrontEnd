import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/SignupForm";
import Profile from "./pages/profile";
import UpdateProfile from "./pages/updateprofile";
 function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>}/>
          <Route path="/profile">
            <Route index element={<Profile/>} />
            <Route path="update" element={<UpdateProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  export default App;