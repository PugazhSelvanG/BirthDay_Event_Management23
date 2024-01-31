import React, { useState } from "react";
import "../assets/css/adminlogin.css"; 

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = () => {
    setError("");
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }
    if (username.length < 5) {
      setError("Username must be at least 5 characters.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    console.log("Logging in with", username, password);
    navigate("/adminpage")
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-form">
        <h2>Admin Login</h2>
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

          <button type="button"  style={{padding:"12px 12px"}}onClick={handleLogin}>
          <a href="/adminpage">
          Login
          </a>
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
