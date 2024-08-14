import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username) {
      setAuthenticated(true);
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setUsername('');
  };

  return (
    <Router>
      <div className="main-container">
        <p>You are not authendicated, Please login first</p>
          <ul>
            <li>
              <Link to="/playground">Playground</Link>
            </li>
            {authenticated ? (
              <li>
                <Link to="/" onClick={handleLogout}>Logout</Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
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
              <div>
                <p>Page Not Found</p>
                <button onClick={handleLogin}>Login</button>
              </div>
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