import React from "react";

import Auth from "../utils/auth";

const Footer = () => {
  return (
    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <div className="container">
          {Auth.loggedIn() ? (
            <ul>
              <li>
                <a href="/profile">My Profile</a>
              </li>
              <li>
                <a href="/runsheet">Runsheet </a>
              </li>
              <li>
                <a href="/summary">Summary</a>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <a
                  href="https://github.com/Richard2415"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>
                    &copy; {new Date().getFullYear()} - Richard
                  </strong>
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Footer;
