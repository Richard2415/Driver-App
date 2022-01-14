import { Route, Redirect } from "react-router-dom";

import auth from "../utils/auth";

export function PrivateRoute({ component: Component, ...rest }) {
  const loggedIn = auth.loggedIn();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedIn) {
          return <Component {...props} />;
        }
        return <Redirect to="/" />;
      }}
    />
  );
}
