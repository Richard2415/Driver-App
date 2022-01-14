import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { QUERY_ME } from "../utils/queries";

const DriverInfo = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const driverData = data?.me.driver || {};
  const userData = data?.me || {};

  if (loading) {
    return (
      <div  className="hero">
        <div className="container">
        <button className="button is-large is-warning is-loading">Loading...</button>
        </div>
      </div>);
  }

  return (
  <>
  <div className="column"></div>
    <div className="column">
      <div className="content">
        <p className="subtitle is-6 has-text-black">First Name</p>
        <p className="title is-4">{driverData.firstName}</p>
      </div>
      <div className="content">
        <p className="subtitle is-6 has-text-black">Last Name</p>
        <p className="title is-4">{driverData.lastName}</p>
      </div>
      <div className="">
        <p className="subtitle is-6 has-text-black">Email</p>
        <p className="title is-4">{userData.email}</p>
      </div>
    </div>

    <div className="column">
      <div className="content">
        <p className="subtitle is-6 has-text-black">Company Name</p>
        <p className="title is-4">{driverData.companyName}</p>
      </div>
      <div className="content">
        <p className="subtitle is-6 has-text-black">Phone Number</p>
        <p className="title is-4">{driverData.phoneNumber}</p>
      </div>
      <div className="content">
        <p className="subtitle is-6 has-text-black">Driver Licence</p>
        <p className="title is-4">{driverData.driverLicence}</p>
      </div>
    </div>  
    <div className="column"></div>
  </>
  );
};

export default DriverInfo;
