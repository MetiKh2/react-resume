import React from "react";
import banner from "../../images/cc-bg-1.jpg";
import personal from "../../images/personal.jpg";
import {
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";
const Banner = ({ information, loading }) => {
  return (
    <section style={{ width: "100%", height: "30rem" }}>
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url('${banner}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className={
          "h-100 w-100 d-flex justify-content-center align-items-center position-relative"
        }
      >
        {loading && (
          <button class="btn btn-primary" type="button" >
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        )}
        {!loading && (
          <div className={"d-flex flex-column align-items-center text-white"}>
            <img
              src={information.image}
              width="140"
              height="140"
              className={"rounded-circle"}
            />
            <h3 className={"my-3 fw-bold"}>
              {information.name} {information.lastName}
            </h3>
            <p className={"fs-6 text-uppercase"}>
              {information.abilitySummary}
            </p>
            <div className={"d-flex"}>
              <a  href="#contact" className={"btn btn-success text-white btn-sm me-2"}>
                Hire me
              </a>
              <button className={"btn btn-success text-white btn-sm"}>
                Download
              </button>
            </div>
          </div>
        )}
        <div className={"position-absolute bottom--20"}>
          <div className={"d-flex justify-content-evenly"}>
            <a
              href=""
              target={"_blank"}
              className={"bg-secondary text-white rounded-circle ms-2"}
              style={{ padding: "10px 12px" }}
            >
              <BsFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/meti._.kh_/"
              target={"_blank"}
              className={"bg-secondary text-white rounded-circle ms-2"}
              style={{ padding: "10px 12px" }}
            >
              <BsInstagram size={20} />
            </a>
            <a
              href="https://github.com/MetiKh2"
              target={"_blank"}
              className={"bg-secondary text-white rounded-circle ms-2"}
              style={{ padding: "10px 12px" }}
            >
              <BsGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/%D9%85%D9%87%D8%AF%DB%8C-%D8%AE%D8%AF%D8%A7%D8%B1%D8%AD%DB%8C%D9%85%DB%8C-265a5220b/"
              target={"_blank"}
              className={"bg-secondary text-white rounded-circle ms-2"}
              style={{ padding: "10px 12px" }}
            >
              <BsLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/Meti_Kh"
              target={"_blank"}
              className={"bg-secondary text-white rounded-circle ms-2"}
              style={{ padding: "10px 12px" }}
            >
              <BsTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
