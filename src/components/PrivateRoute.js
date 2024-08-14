// src/components/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={authenticated ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;