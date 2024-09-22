// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import './App.css';
import NavigationBar from './Navbar/Navbar.jsx'; // Import NavigationBar component
import LoginPage from './PAGES/log in/LoginPage.jsx'; // Import Login component
import AuthPage from './PAGES/registiration/AuthPage.jsx'; // Import Register component
import Footer from './Footer/Footer.jsx';

import Landingpage from './PAGES/home/landingpage.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        
        <Routes>
          <Route path="/login" element={<LoginPage />} /> {/* Define Login route */}
          <Route path="/register" element={<AuthPage />} /> {/* Define Register route */}
          {/* Add other routes here */}
        </Routes>

        <Landingpage/>

        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
