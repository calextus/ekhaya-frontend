import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaInfoCircle, FaUsers, FaNewspaper } from 'react-icons/fa';
import' ./footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section: Logo and Search */}
        <div className="footer-left">
          <div className="logo">
            <img src="/path/to/logo.png" alt="Ekhaya logo" className="logo-image" />
            <div className="logo-text">
              <h2>Ekhaya</h2>
              <p>invest in crypto<br />invest in the future</p>
            </div>
          </div>
          
          <div className="search-bar">
            <input type="text" placeholder="Hinted search text" className="search-input" />
            <button className="search-button">
              <FaSearch />
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Right Section: Links */}
        <div className="footer-right">
          <div className="footer-buttons">
            <a href="/about-us" className="footer-button">
              <FaInfoCircle /> About Us
            </a>
            <a href="/community" className="footer-button">
              <FaUsers /> Community
            </a>
            <a href="/blog-posts" className="footer-button">
              <FaNewspaper /> Blog Posts
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Links */}
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="/terms" className="footer-link">Terms and Conditions</a>
          <a href="/privacy" className="footer-link">Privacy</a>
          <a href="/cookies" className="footer-link">Site Cookies</a>
        </div>
        <p>© Ekhaya. All rights reserved 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
