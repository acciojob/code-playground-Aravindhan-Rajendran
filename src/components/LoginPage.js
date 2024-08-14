// src/components/LoginPage.js
import React from 'react';

const LoginPage = ({ onLogin }) => {
  return (
    <div className="main-container">
      <h2>Login Page</h2>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default LoginPage;