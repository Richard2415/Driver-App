import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import { PrivateRoute } from "./components/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Runsheet from "./pages/Runhseet"
import Summary from "./pages/Summary";

const client = new ApolloClient({

  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  // LOCAL
  uri: "http://localhost:3001/graphql",
  // HEROKU
  //uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <section className="hero is-success is-fullheight">
          <Navbar />
          <Switch>
            <PublicRoute path="/" exact component={Home} />
            <PublicRoute path="/login" exact component={Login} />
            <PublicRoute path="/register" exact component={Register} />
            <PrivateRoute path="/profile" exact component={Profile} />
            <PrivateRoute path="/runsheet" exact component={Runsheet} />
            <PrivateRoute path="/summary" exact component={Summary} />
            <Route path="/about" exact component={About} />
          </Switch>
          <Footer />
        </section>
      </Router>
    </ApolloProvider>
  );
}

export default App;
