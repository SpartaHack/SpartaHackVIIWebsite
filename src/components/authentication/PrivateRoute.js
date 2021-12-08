import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Component responsible for routing users to components that require that a user be logged in

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/AttendeeLogin" />
        );
      }}
    ></Route>
  );
}
