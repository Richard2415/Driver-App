import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import Auth from "../utils/auth";
import { SAVE_RUNSHEET } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";

const RunsheetForm = () => {
    const [runsheetForm, setRunsheetForm] = useState({
        date: "",
        startTime: "",
        finishTime: "",
        startOdometer: "",
        finishOdometer: "",
    })
  
    const [saveRunsheet] = useMutation(SAVE_RUNSHEET);

    const { loading, data } = useQuery(QUERY_ME);
    const driverInformation = data?.me.driver || [];
    const truckInformation = data?.me.trucks || [];

    if (loading) {
        return (
          <div  className="hero">
            <div className="container">
            <button className="button is-large is-warning is-loading">Loading...</button>
            </div>
          </div>);
      }
    
    const handleChange = (event) => {
      const { name, value } = event.target;
      setRunsheetForm({ ...runsheetForm, [name]: value });
    };

    const handleRunsheetSubmit = async (event) => {
        try {
          const { data } = await saveRunsheet({
            variables: { 
              dataRunsheet: { ...runsheetForm }}});

        } catch (err) {
          console.log(err);
        }
    };
    const today = new Date();
    const theDay = 'Today:' + ' ' + today.getDate() + '-' + (today.getMonth() + 1) + '-'  + today.getFullYear() 
    const theTime = 'Time:' + ' ' + today.getHours() + ':' + today.getMinutes()

  return (
    <div className="hero has-text-centered">
      <div className="container">
        <h2 className="title">RUNSHEET</h2> 
        <h3 className="title is-5">{ theDay }</h3>
        <h3 className="title is-5">{ theTime }</h3>
      </div>
      <br></br>
      <form onSubmit={handleRunsheetSubmit} className="container">
        <div className="field is-grouped">
           <input
             className="input is-warning is-rounded " 
             placeholder="Date"
             name="date"
             required type="date"
             value={runsheetForm.date}
             onChange={handleChange}
           />
         </div>
         <div className="field is-grouped has-text-weight-bold	">
         <div className="container">START</div>
         <div className="container">FINISH</div>
         </div>
         <div className="field is-grouped">
           <input
             className="input is-warning is-rounded" 
             placeholder="Start Time"
             name="startTime"
             required type="time"
             value={runsheetForm.startTime}
             onChange={handleChange}
           />
           <input
             className="input is-warning is-rounded" 
             placeholder="Finish Time"
             name="finishTime"
             required type="time"
             value={runsheetForm.finishTime}
             onChange={handleChange}
           />
         </div>
         <div className="field is-grouped">
           <input
             className="input is-warning is-rounded" 
             placeholder="Start Odometer"
             name="startOdometer"
             required type="number"
             value={runsheetForm.startOdometer}
             onChange={handleChange}
           />
           <input
             className="input is-warning is-rounded" 
             placeholder="Finish Odometer"
             name="finishOdometer"
             required type="number"
             value={runsheetForm.finishOdometer}
             onChange={handleChange}
           />
         </div>
         <button className="button is-large is-warning is-rounded is-outlined" style={{ cursor: "pointer" }} type="submit">
           SAVE
         </button>
      </form>
    </div>
  ); 
};

export default RunsheetForm;