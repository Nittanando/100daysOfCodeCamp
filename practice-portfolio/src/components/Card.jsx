import React from "react";
import demo from "../assets/images/png/mezban-3.png";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card-component p-3">
      <div className="card-image">
        <img className="project-card-image" src={demo} alt="Recent projects" />
      </div>
      <div className="card-description mt-3">
        <Link className="card-title title-font-size text-dark fs-5">
          Project title
        </Link>
        <p className="card-paragraph paragraph-font-size mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          labore exercitationem.
        </p>
      </div>
    </div>
  );
};

export default Card;
