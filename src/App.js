import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Playground from './components/PlayGround'; // Ensure this matches the actual file name

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{' '}
          <Link to="/playground">PlayGround</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              authenticated ? (
                <HomePage />
              ) : (
                <p>You are not authenticated. Please log in first.</p>
              )
            }
          />
          <Route
            path="/login"
            element={<LoginPage onLogin={handleLogin} />}
          />
          <Route
            path="/playground"
            element={authenticated ? <Playground /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;