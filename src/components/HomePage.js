import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="main-container">
      <p>Logged in! Now you can enter Playground</p>
      <ul>
        <li>
          <Link to="/playground">PlayGround</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;