import React from "react";
import { AddUser } from "../../utils/functions";

const Form = ({ info, setInfo, handleSubmit }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    setInfo({...info,[name]:value})
    console.log(info);

  };

  return (
    <form className="container w-25  for " onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center border border-none w-100 ">
        <a className="m-2 mt-3 fs-5" href="https://github.com/ozkan4186">
          <code> {`<Anka/>`} </code>
        </a>
        <h2 className="m-2">DESİGN</h2>
      </div>

      <br />
      <br />
      <h2 className="border border-none w-100 text-center ">ADD CONTACT</h2>
      <br />
      <br />
      <div
        style={{
          backgroundColor: "aqua",
          alignİtems: "center",
          border: "none",
          borderRadius: "10px",
          height: "300px",
          padding: "2rem",
        }}
      >
        <div className="mb-3 ">
          <input
            name="username"
            className="form-control px-3"
            aria-describedby="emailHelp"
            placeholder="username"
            onChange={handleChange}
            value={info.username}
          />
          <i className="fa-solid fa-person phone1 "></i>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 ">
          <input
            type="tel"
            className="form-control px-4 "
            name="phoneNumber"
            placeholder="PHONE NUMBER"
            onChange={handleChange}
            value={info.phoneNumber}
          />
          <i className="fa-solid fa-phone  phone2 "></i>
        </div>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={handleChange}
          name="gender"
          value={info.gender}
        >
          <option value="Gender">Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
        <br />

        <button type="submit" className="btn btn-primary">
          ADD
        </button>
      </div>
    </form>
  );
};

export default Form;
