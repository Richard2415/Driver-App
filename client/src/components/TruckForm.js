import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import { SAVE_TRUCK } from "../utils/mutations";
import Auth from "../utils/auth";

const TruckForm = () => {
  const [truckState, setTruckState] = useState({
    reg: "",
    model: "",
    year: "",
  });
  const [saveTruck] = useMutation(SAVE_TRUCK);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTruckState({
      ...truckState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    try {
      const { data } = await saveTruck({
        variables: {
          ...truckState,
          truckDriver: Auth.getProfile().data.name,
        },
      });

    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div >
      <h1 className="has-text-black has-text-weight-medium">Add your truck details</h1>
      <form onSubmit={handleFormSubmit} className="field is-grouped">
        <input
          className="input is-warning is-rounded "
          placeholder="RegNo"
          name="rego"
          required type="text"
          value={truckState.rego}
          onChange={handleChange}
        />
        <input
          className="input is-warning is-rounded"
          placeholder="Model"
          name="model"
          required type="text"
          value={truckState.model}
          onChange={handleChange}
        />
        <input
          className="input is-warning is-rounded"
          placeholder="Year"
          name="year"
          required type="number"
          value={truckState.year}
          onChange={handleChange}
        />

        <button className="button is-warning is-rounded is-outlined" style={{ cursor: "pointer" }} type="submit">
          <i className="fas fa-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default TruckForm;
