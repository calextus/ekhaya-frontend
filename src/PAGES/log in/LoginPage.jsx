import React from 'react';
import './LoginPage.css'; // Assuming you're using an external CSS file

const LoginPage = () => {
  return (
    <div className="login-container">
      {/* Left Section - Sign In */}
      <div className="login-left">
        <div className="login-form">
          <h2>Sign in to Diprella</h2>
          <div className="social-icons">
            <button className="social-button">F</button>
            <button className="social-button">G</button>
            <button className="social-button">in</button>
          </div>
          <p>or use your email account:</p>
          <form className="sign-in-form">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <a href="#" className="forgot-password">Forgot your password?</a>
            <button className="sign-in-button">Sign In</button>
          </form>
        </div>
      </div>

      {/* Right Section - Sign Up Invitation */}
      <div className="login-right">
        <h2>Hello, Friend!</h2>
        <p>Enter your personal details and start your journey with us</p>
        <button className="sign-up-button">Sign Up</button>
      </div>
    </div>
  );
};

export default LoginPage;
