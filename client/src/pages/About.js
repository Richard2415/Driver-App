import React from "react";

function About() {
  return (
    <div className="hero">
      <figure className="image">
        <img src="/images/driver_app_banner1_transparent.png" alt="banner of trucks, map, boxes, pallets, driver and loader" />
      </figure>
      <div className="container">
        <h1 className="title has-text-centered">About Me and this Application</h1>
        <div className="columns">
          <div className="column is-2">
            <figure className="image">
              <img src="/images/hey_banner.png" alt="banner with word Hey" />
            </figure>
          </div>
          <div className="column has-text-left is-10">
            <p className="subtitle mb-0 mt-3">My name is Richard.</p>
            <p className="subtitle mb-0">A web developer by passion.</p>
            <p className="subtitle mb-0">With bachelor​ degrees in Mechanical Engineering</p>
          </div>
        </div>


        <p className="subtitle">
          The <strong>Truck Driver App </strong>it aims to help drivers to move to the digital world from paper and pen.
          Helping drivers to keep all information accessible at any time about their runs and trucks.

        </p>

        <p className="subtitle">
          Imagine no more scanning paperwork to email to other people, but instead just a simple screenshot of the summary page for the week or a specific day!
          And it all on your phone.
          More than that, this app is accessible on any device.
        </p>
      </div>
    </div>
  );
}

export default About;