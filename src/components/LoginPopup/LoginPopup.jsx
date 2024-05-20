import React, { useState } from "react";
import "./LoginPopup.css";

const LoginPopup = ({ showLogin, setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const handleFormSubmit = (e) => {
    // e.preventDefault();
  }
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input type="text" placeholder="Enter your Name" required />
          )}
          <input type="email" placeholder="Enter your Email" required />
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button onClick={handleFormSubmit}>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" id="checkbox" required />
          <label htmlFor="checkbox">By continuing, i agree to the terms of use and privacy policy</label>
        </div>
        {currState === "Sign Up" ? (
          <p className="account-status">
            Already have a Acoount ?{" "}
            <span onClick={() => setCurrState("Login")}>Click Here</span>
          </p>
        ) : (
          <p className="account-status">
            Create a new Acoount ?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
