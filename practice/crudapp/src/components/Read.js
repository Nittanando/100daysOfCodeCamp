import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [APIdata, setAPIdata] = useState([]);
  useEffect(() => {
    axios
      .get(`https://6375f5e8b5f0e1eb85fe1c90.mockapi.io/fakeData`)
      .then((response) => {
        setAPIdata(response.data);
      });
  }, []);
  const setData = (data) => {
    let { id, firstName, lastName, checkBox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Check Box", checkBox);
  };
  const getData = () => {
    axios
      .get(`https://6375f5e8b5f0e1eb85fe1c90.mockapi.io/fakeData`)
      .then((getData) => {
        setAPIdata(getData.data);
      });
  };
  const onDelete = (id) => {
    axios
      .delete(`https://6375f5e8b5f0e1eb85fe1c90.mockapi.io/fakeData/${id}`)
      .then(() => {
        getData();
      });
  };
  return (
    <div>
      <Link to="/create">
        <button>Create new</button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Checked</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {APIdata.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.checkBox ? "Checked" : "Unchecked"}</td>

                <td>
                  <Link to="/update">
                    <button onClick={() => setData(data)}>Edit</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => onDelete(data.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Read;
