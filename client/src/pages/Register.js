import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

import { ADD_PROFILE } from "../utils/mutations";
import Auth from "../utils/auth";

const Register = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

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
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  }

  return (
    <div className="hero">
    <div className="container has-text-centered">
      <h1>Register Page</h1>
      <div>
        {data ? (
          <p>
            Success! You may now head <Link to="/">to your Profile Page.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div className="field">
              <label className="label">Nickname</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  placeholder="Nickname"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  placeholder="Email "
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  placeholder="Password"
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  value={formState.password}
                  onChange={handleChange}/>
                <i onClick={togglePasswordVisiblity} className="fas fa-eye"></i>
                <span className="icon is-small is-left"><i className="fas fa-key"></i></span>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button
                  className="button is-link"
                  style={{ cursor: "pointer" }}
                  type="submit"
                  >
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}

        {error && <div className="tag is-danger">{error.message}</div>}
      </div>
    </div>
    </div>
  );
};

export default Register;
