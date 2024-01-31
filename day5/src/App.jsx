import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"; 
import Login from "./pages/Login";
import UserLogin from "./pages/Userlogin";
import AdminLogin from "./pages/adminlogin";
import Signup from "./pages/Signuppage";
import Profile from "./components/Profile";
import Book from "./pages/Book";
import Userpage from "./pages/Userpage";
import Sidebar from "./components/Sidebar";
import Theme from "./pages/Theme";
import Food from "./pages/Food";
import Adminpage from "./pages/Adminpage";
import Admin_themes from "./pages/Admin_themes";
import Addons from "./pages/Addons";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/userlogin" element={<UserLogin/>}/>
        <Route path="/admin" element={<AdminLogin/>}/>
        <Route path="/userpage" element={<Userpage/>}/>
        <Route path="/adminpage" element={<Adminpage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/book" element={<Book/>}/>
        <Route path="/side" element={<Sidebar/>}/>
        <Route path="/themes" element={<Theme/>}/>
        <Route path="/admintheme" element={<Admin_themes/>}/>
        <Route path="/addons" element={<Addons/>}/>
        <Route path="/food" element={<Food/>}/>
        <Route path="/adminpage" element={<Adminpage/>}/>
      </Routes>
    </Router>
  );
}

export default App;