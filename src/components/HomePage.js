// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="main-container">
      <p>You are not authenticated, Please login first</p>
      <ul>
        <li>
          <Link to="/playground">PlayGround</Link> | <Link to="/login">Login</Link>
        </li>
        <li>
          <p>Page Not Found</p>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;