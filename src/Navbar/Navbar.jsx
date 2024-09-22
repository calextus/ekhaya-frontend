// components/NavigationBar.js
import React, { useState } from 'react';
import './Navbar.css';

const NavigationBar = () => {
  const [showCommunity, setShowCommunity] = useState(false);
  const [showInvest, setShowInvest] = useState(false);
  const [showWallet, setShowWallet] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Ekhaya</div>
      <ul className="navbar-menu">
        <li
          className="menu-item"
          onMouseEnter={() => setShowCommunity(true)}
          onMouseLeave={() => setShowCommunity(false)}
        >
          Community
          {showCommunity && (
            <ul className="dropdown">
              <li>Home</li>
              <li>Articles</li>
              <li>Blogs</li>
              <li>Trending Communities</li>
              <li>Ghana Community</li>
              <li>Nigeria Community</li>
              <li>Lesotho Community</li>
            </ul>
          )}
        </li>
        <li
          className="menu-item"
          onMouseEnter={() => setShowInvest(true)}
          onMouseLeave={() => setShowInvest(false)}
        >
          Invest
          {showInvest && (
            <ul className="dropdown">
              <li>Invest In Company</li>
              <li>Invest In Community</li>
            </ul>
          )}
        </li>
        <li
          className="menu-item"
          onMouseEnter={() => setShowWallet(true)}
          onMouseLeave={() => setShowWallet(false)}
        >
          Wallet
          {showWallet && (
            <ul className="dropdown">
              <li>Send</li>
              <li>Receive</li>
            </ul>
          )}
        </li>
      </ul>
      <div className="auth-buttons">
        <button className="login">Log In</button>
        <button className="register">Register</button>
      </div>
    </nav>
  );
};

export default NavigationBar;
