import { Route, Redirect } from "react-router-dom";

import auth from "../utils/auth";

export function PublicRoute({ component: Component, ...rest }) {
  const loggedIn = auth.loggedIn();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedIn) {
          return <Redirect to="/profile" />;
        }
        return <Component {...props} />;
      }}
    />
  );
}
