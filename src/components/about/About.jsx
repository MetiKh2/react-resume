import React from "react";
import {Loading} from '../';

const About = ({ loading, information }) => {
  return (
    <section id="about" className={"px-4 py-3 shadow-lg mt-5 "}>
      {loading ? (
      <Loading/>
      ) : (
        <div className={"d-flex flex-md-row flex-column"}>
          <div className={"about-width"}>
            <h3 className={"fw-bold mb-3"}>About</h3>
            <p className={"opacity-75"}>
              {information.AboutSummary}
            </p>
            <p className={"opacity-75"}>
              {information.AboutText}
            </p>
          </div>
          <div className={"ms-4"}>
            <h3 className={"fw-bold mb-3"}>Basic Information</h3>
            <div className={"d-flex justify-content-between"}>
              <p className={"fw-bold"}>Age :</p>
              <p className={"opacity-75"}>{information.Age}</p>
            </div>
            <div className={"d-flex justify-content-between"}>
              <p className={"fw-bold"}>Email :</p>
              <p className={"opacity-75"}>{information.Email}</p>
            </div>
            <div className={"d-flex justify-content-between"}>
              <p className={"fw-bold"}>Phone :</p>
              <p className={"opacity-75"}>{information.Phone}</p>
            </div>{" "}
            <div className={"d-flex justify-content-between"}>
              <p className={"fw-bold"}>Address :</p>
              <p className={"opacity-75"}>{information.Language}</p>
            </div>{" "}
            <div className={"d-flex justify-content-between"}>
              <p className={"fw-bold"}>Language :</p>
              <p className={"opacity-75"}>{information.Address}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
