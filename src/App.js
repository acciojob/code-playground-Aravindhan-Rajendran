import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLoginLogout = () => {
    setAuthenticated(!authenticated);
  };

  return (
    <Router>
      <div className="main-container">
        <ul>
        {authenticated ? 'Logged in, Now you can enter Playground' : 'You are not authenticated, Please login first'}
          <li>
            <Link to="/playground">PlayGround</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <button onClick={handleLoginLogout}>
          {authenticated ? 'Log Out' : 'Log In'}
        </button>
        <Routes>
          <Route
            path="/"
            element={
              authenticated ? (
                <Navigate to="/playground" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/login"
            element={
              authenticated ? (
                <Navigate to="/playground" />
              ) : (
                <div>
                  <p>Login</p>
                </div>
              )
            }
          />
          <Route
            path="/playground"
            element={authenticated ? <div>Hi Welcome to Code PlayGround</div> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
