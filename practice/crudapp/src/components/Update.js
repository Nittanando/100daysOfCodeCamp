import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Update() {
  let navigate = useNavigate();
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkBox, setCheckBox] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setCheckBox(localStorage.getItem("Check Box"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`https://6375f5e8b5f0e1eb85fe1c90.mockapi.io/fakeData/${id}`, {
        firstName,
        lastName,
        checkBox,
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <div>
      <form className="create-form">
        <span className="create-label-input">
          <label htmlFor="fName">First Name</label>
          <input
            id="fName"
            type="text"
            placeholder="first name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </span>

        <span className="create-label-input">
          <label htmlFor="lName">Last Name</label>
          <input
            id="lName"
            type="text"
            placeholder="last name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </span>

        <span className="create-label-checkbox">
          <input
            className="checkbox"
            type="checkbox"
            value={checkBox}
            onChange={(c) => {
              setCheckBox(c.target.value);
            }}
          />
          <p className="checkbox-title">I agree to the Terms and Conditions</p>
        </span>
      </form>
      <button onClick={updateAPIData} type="submit" className="create-button">
        Submit
      </button>
    </div>
  );
}

export default Update;
