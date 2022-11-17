import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

function Create() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkBox, setCheckBox] = useState("");
  const PostData = () => {
    axios
      .post(`https://6375f5e8b5f0e1eb85fe1c90.mockapi.io/fakeData`, {
        firstName,
        lastName,
        checkBox,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <div className="create-main">
      <form className="create-form">
        <span className="create-label-input">
          <label htmlFor="fName">First Name</label>
          <input
            id="fName"
            type="text"
            placeholder="first name"
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
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </span>

        <span className="create-label-checkbox">
          <input
            className="checkbox"
            type="checkbox"
            onChange={(c) => {
              setCheckBox(c.target.value);
            }}
          />
          <p className="checkbox-title">I agree to the Terms and Conditions</p>
        </span>
      </form>
      <button onClick={PostData} type="submit" className="create-button">
        Submit
      </button>
    </div>
  );
}

export default Create;
