import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { SAVE_INFO } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";

const DriverForm = () => {
  const [driverForm, setDriverForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    phoneNumber: "",
    driverLicence: "",
  });

  const [saveInfo] = useMutation(SAVE_INFO);

  const { loading, data } = useQuery(QUERY_ME);
  const driverInformation = data?.me.driver || [];

  if (loading) {
    return (
      <div className="hero">
        <div className="container">
          <button className="button is-large is-warning is-loading">Loading...</button>
        </div>
      </div>);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDriverForm({ ...driverForm, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    try {
      const { data } = await saveInfo({
        variables: { dataDriver: { ...driverForm } },
      });
      if (!data.ok) {
        throw new Error("Something went wrong on handleFormSubmit!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {driverInformation.firstName ? (
        <>
          <div className="dropdown is-hoverable">
            <div className="dropdown-trigger">
              <button className="button is-warning" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>Update</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <form onSubmit={handleFormSubmit} className="field" >
                  <div className="control has-icons-left">
                    <input
                      className="input is-link"
                      placeholder="First Name"
                      name="firstName"
                      required type="text"

                      value={driverForm.firstName}
                      onChange={handleChange}
                    />
                    <span className="icon is-left">
                      <i className="fas fa-user-edit"></i>
                    </span>
                  </div>

                  <div className="control has-icons-left">
                    <input
                      className="input is-link"
                      placeholder="Last Name"
                      name="lastName"
                      required type="text"

                      value={driverForm.lastName}
                      onChange={handleChange}
                    />
                    <span className="icon is-left">
                      <i className="fas fa-users"></i>
                    </span>
                  </div>

                  <div className="control has-icons-left">
                    <input
                      className="input is-link"
                      placeholder="Company Name"
                      name="companyName"
                      required type="text"
                      value={driverForm.companyName}
                      onChange={handleChange}
                    />
                    <span className="icon is-left">
                      <i className="fas fa-briefcase"></i>
                    </span>
                  </div>

                  <div className="control has-icons-left">
                    <input
                      className="input is-link"
                      placeholder="Phone XXXXXXXXXX"
                      name="phoneNumber"
                      required type="tel"
                      pattern="[0-10]+"
                      value={driverForm.phoneNumber}
                      onChange={handleChange}
                    />
                    <span className="icon is-left">
                      <i className="fas fa-phone"></i>
                    </span>
                  </div>

                  <div className="control has-icons-left">
                    <input
                      className="input is-link"
                      placeholder="Driver's Licence"
                      name="driverLicence"
                      required type="tel"
                      pattern="[0-9]+"
                      value={driverForm.driverLicence}
                      onChange={handleChange}
                    />
                    <span className="icon is-left">
                      <i className="far fa-id-badge"></i>
                    </span>
                  </div>

                  <div className="mt-2">
                    <button className="button is-link is-outlined" style={{ cursor: "pointer" }} required type="submit">
                      UPDATE
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="has-text-black has-text-weight-medium">Add your details</h1>

          <form onSubmit={handleFormSubmit} className="field" >
            <div className="control has-icons-left">
              <input
                className="input is-link"
                placeholder="Your First Name"
                name="firstName"
                required type="text"

                value={driverForm.firstName}
                onChange={handleChange}
              />
              <span className="icon is-left">
                <i className="fas fa-user-edit"></i>
              </span>
            </div>

            <div className="control has-icons-left">
              <input
                className="input is-link"
                placeholder="Your Last Name"
                name="lastName"
                required type="text"

                value={driverForm.lastName}
                onChange={handleChange}
              />
              <span className="icon is-left">
                <i className="fas fa-users"></i>
              </span>
            </div>

            <div className="control has-icons-left">
              <input
                className="input is-link"
                placeholder="Your Company Name"
                name="companyName"
                required type="text"
                value={driverForm.companyName}
                onChange={handleChange}
              />
              <span className="icon is-left">
                <i className="fas fa-briefcase"></i>
              </span>
            </div>

            <div className="control has-icons-left">
              <input
                className="input is-link"
                placeholder="Your Phone Number XXXX-XXX-XXX"
                name="phoneNumber"
                required type="tel"
                pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                value={driverForm.phoneNumber}
                onChange={handleChange}
              />
              <span className="icon is-left">
                <i className="fas fa-phone"></i>
              </span>
            </div>

            <div className="control has-icons-left">
              <input
                className="input is-link"
                placeholder="Your Driver's Licence Number"
                name="driverLicence"
                required type="tel"
                pattern="[0-9]+"
                value={driverForm.driverLicence}
                onChange={handleChange}
              />
              <span className="icon is-left">
                <i className="far fa-id-badge"></i>
              </span>
            </div>

            <div className="mt-4">
              <button className="button is-link is-outlined" style={{ cursor: "pointer" }} required type="submit">
                Submit
              </button>
            </div>

          </form>
        </>
      )}
    </div>
  );
};

export default DriverForm;
