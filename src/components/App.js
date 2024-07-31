import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
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

// ... rest of your code ...

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
