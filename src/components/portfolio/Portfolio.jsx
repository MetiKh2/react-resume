import React, { useEffect, useState } from "react";
import img1 from "../../images/graphic-design-1.jpg";
import img2 from "../../images/graphic-design-2.jpg";
import img3 from "../../images/graphic-design-3.jpg";
import img4 from "../../images/graphic-design-4.jpg";
import { Loading } from "../";
const Portfolio = ({ types, typesLoading, portfolios, portfoliosLoading }) => {
  const [type, setType] = useState('asp.net core');
  const [selectedPortfolios, setSelectedPortfolios] = useState([]);
  useEffect(() => {
    setSelectedPortfolios(
      portfolios.filter((p) => p.type.toLowerCase() == type.toLowerCase())
    );
  }, [type,portfolios]);
  
  return (
    <section id="portfolio" className={"mt-5"}>
      <h2 className={"mb-1 text-center"}>Portfolio</h2>
      <a
        href="https://github.com/MetiKh2"
        className="d-block text-center opacity-75 cursor-pointer"
      >
        for more see my github
      </a>
      {typesLoading ? (
        <Loading />
      ) : (
        <div className={"d-flex justify-content-center my-4"}>
          {types.map((item) => (
            <div
              onClick={() => setType(item.name.toLowerCase())}
              key={item.name}
              className={`${
                item.name == type ? "bg-secondary text-white" : ""
              } ms-2 p-1 text-capitalize portfolio-type-item`}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
      <div className={"max-w-900"}>
        <div className={"row mt-3"}>
          {portfoliosLoading ? (
            <Loading />
          ) : (
            <>
              {selectedPortfolios.map((portfolio) => (
                <div className={"col-12 col-md-6 mt-1 cursor-pointer"}>
                  <a 
                  className={"position-relative d-block portfolio-item"} 
                  target={'_blank'} 
                  href={portfolio.github}>
                  <img loading="lazy" width={"100%"} height={300} src={portfolio.image} />
                  <div className="portfolio-item-layer">{portfolio.name}</div>
                  </a>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
