import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [role, setRole] = useState("general"); // Track selected role
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page

    // Logic for login can be added here (like validating credentials)
    navigate("/dashboard"); // Navigate to the Dashboard after successful login
  };

  return (
    <div className="container">
      <h1 className="title">LifeConnect</h1>

      {/* Role Selector */}
      <div className="role-selector">
        <button
          className={role === "general" ? "active" : ""}
          onClick={() => setRole("general")}
        >
          User
        </button>
        <button
          className={role === "ambulance" ? "active" : ""}
          onClick={() => setRole("ambulance")}
        >
          Ambulance
        </button>
        <button
          className={role === "police" ? "active" : ""}
          onClick={() => setRole("police")}
        >
          Police
        </button>
        <button
          className={role === "hospital" ? "active" : ""}
          onClick={() => setRole("hospital")}
        >
          Hospital
        </button>
      </div>

      {/* Login/Signup Form */}
      <div className="form-container">
        {isLogin ? (
          // Login Form
          <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
            <p>
              Don’t have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Sign Up</span>
            </p>
          </div>
        ) : (
          // Signup Form
          <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleLogin}>
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
              <input type="password" placeholder="Confirm Password" required />
              <input type="number" placeholder="Age" required />
              <button type="submit">Sign Up</button>
            </form>
            <p>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Login</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
