import React from 'react';

const LoginPage = ({ onLogin }) => {
  const handleLogin = () => {
    onLogin();
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;