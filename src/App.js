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
          <li>
            <Link to="/playground">Playground</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <Routes>
          <Route
            path="/"
            element={
              authenticated ? (
                <div>
                  <p>Hi, welcome to Code Playground</p>
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/login"
            element={
              authenticated ? (
                <Navigate to="/" />
              ) : (
                <div>
                  <p>You are not authenticated, Please log in first.</p>
                  <button onClick={handleLoginLogout}>Login</button>
                </div>
              )
            }
          />
          <Route
            path="/playground"
            element={authenticated ? <div>Hi, welcome to the Playground</div> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;