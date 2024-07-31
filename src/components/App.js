import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Change this to real auth logic

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const Login = ({ onLogin }) => (
  <div>
    <h2>Login Page</h2>
    <button onClick={() => onLogin(true)}>Login</button>
  </div>
);

const Home = () => (
  <div className="main-container">
    <h2>Home Page (Private)</h2>
  </div>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <nav>
          <a href="/login">Login</a>
          <a href="/home">Home</a>
        </nav>
        <Switch>
          <Route
            path="/login"
            exact
            render={(props) => <Login onLogin={setIsAuthenticated} />}
          />
          <PrivateRoute
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
