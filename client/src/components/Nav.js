import React from "react";
import { useHistory } from "react-router-dom";

import Auth from "../utils/auth";

export default function Nav() {
  const history = useHistory();
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    history.push("/");
  };
  //NAVBAR ACTIVE BUTTON CHANGE
  return (
    <div className="hero-head">
      <header className="navbar">
        <div className="container">
          <strong className="navbar-item">Truck Driver App</strong>
        </div>

        {Auth.loggedIn() ? (
          <>
            <span className="navbar-item">
              <a className="button is-danger" onClick={logout}>
                <span className="icon">
                  <i className="fas fa-truck"></i>
                </span>
                <span>Logout</span>
              </a>
            </span>
          </>
        ) : (
          <>
            <span className="navbar-item">
              <a className="button is-success is-inverted is-active" href="/">
                <span className="icon">
                  <i className="fas fa-truck"></i>
                </span>
                <span>Home</span>
              </a>
            </span>

            <a href="/about" className="navbar-item">
              About
            </a>
          </>
        )}
      </header>
    </div>
  );
}
