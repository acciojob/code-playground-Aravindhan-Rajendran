import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'; // Ensure this path is correct

const Login = ({ onLogin }) => {
  const handleLogin = () => {
    onLogin(true); // Simulate login and update authentication state
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const Home = () => (
  <div>
    <h2>Home Page</h2>
  </div>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="main-container">
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/home">Home</Link>
        </nav>
        <Routes>
          <Route
            path="/login"
            element={<Login onLogin={setIsAuthenticated} />}
          />
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            path="/home"
            element={<Home />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
