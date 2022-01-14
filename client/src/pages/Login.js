import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, loading }] = useMutation(LOGIN_USER);
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      history.push("/profile");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="hero">
    <div className="container has-text-centered">
      <h4>Login Page</h4>
      <form onSubmit={handleFormSubmit}>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input
              className="input"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left">
            <input
              className="input"
              placeholder="Please enter your password"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            <span className="icon is-small is-left"><i className="fas fa-key"></i></span>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button
              className="button is-link"
              style={{ cursor: "pointer" }}
              type="submit"
              disabled={loading}
            >
            Submit
            </button>
          </div>
        </div>
      </form>
      {error && <div className="tag is-danger">{error.message}</div>}
    </div>
    </div>
  );
};

export default Login;
