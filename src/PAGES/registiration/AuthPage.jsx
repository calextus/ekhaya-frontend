import React from 'react';
import './AuthPage.css'; // Assuming you're using an external CSS file

const RegistrationPage = () => {
  // Handler for the Login button
  const handleLoginClick = () => {
    window.location.href = './log in/LoginPage.jsx'; // Replace with the actual path to the Login page
  };

  // Handler for the Landing Page button
  const handleLandingPageClick = () => {
    window.location.href = './home/landingpage.jsx'; // Replace with the actual path to the Landing page
  };

  return (
    <div className="registration-container">
      {/* Left Section - Sign Up Form */}
      <div className="registration-left">
        <div className="registration-form">
          <h2>Create Your Account</h2>
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

      {/* Right Section - Already Registered */}
      <div className="registration-right">
        <h2>Welcome Back!</h2>
        <p>If you already have an account, you can log in with your personal info</p>
        <button className="login-button" onClick={handleLoginClick}>
          Log In
        </button>
        <button className="landing-button" onClick={handleLandingPageClick}>
          Go to Landing Page
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage;
