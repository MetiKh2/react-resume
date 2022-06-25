import React from "react";
import {Loading} from '../';

const Skills = ({ skills, loading }) => {
  let skillsArray = [];
  if (!loading && Skills)
    skillsArray = Object.keys(skills).map((key) => [key, skills[key]]);
  return (
    <section id="skills" className={"mt-5"}>
      <h2 className={"mb-3 text-center"}>Professional Skills</h2>
      {loading ? (
      <Loading/>
      ) : (
        <div className={"shadow-lg p-3"}>
          <div className={"row text-success"}>
            {skillsArray.map((skill) => (
              <div key={skill[0]} className={"col-12 col-sm-6 mb-3"}>
                <div className={" d-flex justify-content-between"}>
                  <p className={" text-capitalize"}>{skill[0]}</p>
                  <p className={"text-success "}>{skill[1]} %</p>
                </div>
                <div className="progress progress-h">
                  <div
                    className="progress-bar bg-success"
                    style={{ width: skill[1]+'%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
