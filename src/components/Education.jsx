import React from "react";
import education from "./data/education.json";

const Education = () => {
  return (
    <>
    <br />
    <br />
    <br />
    <br />
      <div className="container ex" id="education">
        <h1>EDUCATION</h1>
        {education.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                  <img src={`/assets/${data.imageSrc}`} alt="" />
                </div>
                <div className="right">
                  <h2>{data.College}</h2>
                  <h4><span style={{ color: "yellow" }}>{data.location}</span></h4>
                  <h4>{data.Course}</h4>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startyear} - {data.endyear}{" "}
                      <br />
                    </span>
                  </h4>
                  <h5 style={{ color: "yellow" }}>{data.Percentage}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Education;