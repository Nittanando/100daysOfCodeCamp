import React from "react";
import { Link } from "react-router-dom";
import { MdEmail, MdCall, MdLocationOn } from "react-icons/md";
// import { AiOutlineMail } from "react-icons/ai";

const ContactHome = () => {
  return (
    <div className="mt-5 home-contact paragraph-font-size">
      <div className="d-flex justify-content-start align-items-center mb-1">
        <MdCall className="me-2" />
        <Link className="text-dark">+880 1303458172</Link>
      </div>

      <div className="d-flex justify-content-start align-items-center mb-1">
        <MdEmail className="me-2" />
        <Link className="text-dark">sarkar.anando2995@gmail.com</Link>
      </div>

      <div className="d-flex justify-content-start align-items-center mb-1">
        <MdLocationOn className="me-2" />
        <Link className="text-dark">Dhaka, Bangladesh</Link>
      </div>
    </div>
  );
};

export default ContactHome;
