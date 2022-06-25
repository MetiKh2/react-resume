import React, { useState } from "react";
import map from "../../images/staticmap.png";
import { BiUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { GrDocument } from "react-icons/gr";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./../../firebase";
import { toast } from 'react-toastify';
const ContactMe = ({ address, email, phone }) => {
  const [showError, setShowError] = useState(false);
  const [formInputs, setFormInputs] = useState({
    email: "",
    subject: "",
    message: "",
    name: "",
  });
  const resetFormInput=()=>{
    setFormInputs({
        email: "",
        subject: "",
        message: "",
        name: "",
      })
  }
  const changeForm = (name, value) => {
    setFormInputs({ ...formInputs, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formInputs.email ||
      !formInputs.name ||
      !formInputs.subject ||
      !formInputs.message
    ) {
        setShowError(true);
    } else {
      try {
        const docRef = await addDoc(collection(db, "ContactMe"), {
            email: formInputs.email,
            name: formInputs.name,
            subject: formInputs.subject,
            message: formInputs.message,
          });
          setShowError(false);
          toast.success('Message sended to me')
          resetFormInput();
      } catch {
        console.log('Error submitting form');
      }
    }
  };
  return (
    <section
      id="contact"
      style={{ backgroundImage: `url('${map}')` }}
      className={"w-100 bg-custom-contact-me mt-5 text-center pt-5"}
    >
      <div className={"bg-white max-w-750 px-4 py-3 shadow-lg"}>
        <h3>Contact Me</h3>
        <form onSubmit={handleSubmit}>
          <div
            className={"d-flex justify-content-around flex-column flex-sm-row"}
          >
            <div className={"fw-bold mb-4"}>
              <h6 className={"fw-bold"}>Feel free to contact me</h6>
              <div className={"position-relative mt-4"}>
                <input
                value={formInputs.name}
                  className={"ps-5 contact-me-input border-1 w-100"}
                  onChange={(e) => changeForm(e.target.name, e.target.value)}
                  type="text"
                  placeholder={"Name"}
                  name="name"
                />
                <BiUser
                  className={"position-absolute contact-me-icon"}
                  size={18}
                />
              </div>
              <div className={"position-relative mt-4"}>
                <input
                value={formInputs.subject}
                className={"ps-5 contact-me-input border-1 w-100"}
                  onChange={(e) => changeForm(e.target.name, e.target.value)}
                  type="text"
                  placeholder={"Subject"}
                  name="subject"
                />
                <GrDocument
                  className={"position-absolute contact-me-icon"}
                  size={18}
                />
              </div>
              <div className={"position-relative mt-4"}>
                <input
                value={formInputs.email}
                className={"ps-5 contact-me-input border-1 w-100"}
                  onChange={(e) => changeForm(e.target.name, e.target.value)}
                  type="email"
                  placeholder={"Email"}
                  name="email"
                />
                <AiOutlineMail
                  className={"position-absolute contact-me-icon"}
                  size={18}
                />
              </div>
              <div className="mt-3">
                <textarea
                value={formInputs.message}
                name="message"
                  onChange={(e) => changeForm(e.target.name, e.target.value)}
                  className="form-control border-0 border-bottom"
                  placeholder="Your Message"
                  required="required"
                ></textarea>
              </div>
              {showError && (
                <div className="mt-3 alert alert-danger">
                  Please complete all inputs
                </div>
              )}
              <div className={"text-start"}>
                <button className={"btn btn-success btn-sm mt-4"}>
                  Send me!
                </button>
              </div>
            </div>
            <div className={"flex"}>
              <div className={"d-flex flex-column"}>
                <p className={"fw-bold mb-1"}>Address :</p>
                <p className={"opacity-75"}>{address}</p>
              </div>
              <div className={"d-flex flex-column"}>
                <p className={"fw-bold mb-1"}>Phone :</p>
                <p className={"opacity-75"}>{phone}</p>
              </div>
              <div className={"d-flex flex-column"}>
                <p className={"fw-bold mb-1"}>Email :</p>
                <p className={"opacity-75"}>{email}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
