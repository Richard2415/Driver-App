import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero-main">
    <div className="container has-text-centered">
      <div>
        <Link to="/login">
          <button className="button is-fullwidth is-large is-warning is-outlined is-inverted">
            <span>
              <strong>LOG IN</strong>
            </span>
          </button>
        </Link>
      </div>
      <br></br>
      <div>
      <i className="fas fa-truck"></i> ____ 
      <i className="fas fa-traffic-light"></i> ____ 
      <i className="fas fa-truck"></i> ____ 
      <i className="fas fa-pallet"></i> ____ 
      <i className="fas fa-truck"></i> ____ 
      <i className="fas fa-truck-loading"></i> ____ 
      <i className="fas fa-truck"></i>
      </div>
      <br></br>
      <div>
        <Link to="/register">
          <button className="button is-fullwidth is-large is-warning is-outlined">
            <span>
              <strong>REGISTER</strong>
            </span>
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Home;
