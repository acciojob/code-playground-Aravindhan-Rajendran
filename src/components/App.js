import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.js'; // Ensure this path is correct

// Dummy components for demonstration
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
        <Switch>
          <Route
            path="/login"
            exact
            render={(props) => <Login onLogin={setIsAuthenticated} />}
          />
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            path="/home"
            component={Home}
          />
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
