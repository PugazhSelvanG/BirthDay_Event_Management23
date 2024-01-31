import React, { useState } from "react";
import "../assets/css/userlogin.css"; 
import { Navigate } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
    const navigate=useNavigate();
  const handleLogin = () => {
    setError("");
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }
    if (username.length < 3) {
      setError("Username must be at least 3 characters.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    console.log("Logging in with", username, password);
    navigate("/userpage")
  };

  return (
    <div className="--user-login-container">
      <div className="--user-login-form">
        <h2>User Login</h2>
        <br></br>
        <form>
    
          <input
            type="text"
            id="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error-message">{error}</p>

          <button type="button" style={{padding:"12px 12px"}} onClick={handleLogin}>
          Login
          </button>

          <p class=".p">Don't have an account?<a href="/signup">Sign up here!</a></p>
          </form>
      </div>
    </div>
  );
}

export default UserLogin;
