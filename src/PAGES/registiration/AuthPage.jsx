import React from 'react';
import './AuthPage.css'; // Assuming you're using an external CSS file

const AuthPage = () => {
  return (
    <div className="auth-container">
      {/* Left Section - Sign In */}
      <div className="auth-left">
        <div className="welcome-text">
          <h2>Welcome Back!</h2>
          <p>To keep connected with us please login with your personal info</p>
          <button className="sign-in-button">Sign In</button>
        </div>
      </div>

      {/* Right Section - Sign Up */}
      <div className="auth-right">
        <h2>Create Account</h2>
        <div className="social-icons">
          <button className="social-button">F</button>
          <button className="social-button">G</button>
          <button className="social-button">in</button>
        </div>
        <p>or use your email for registration:</p>
        <form className="sign-up-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className="sign-up-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
