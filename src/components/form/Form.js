import React from "react";
import { AddUser } from "../../utils/functions";

const Form = ({ info, setInfo, handleSubmit }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    setInfo({ ...info, [name]: value });
    console.log(info);
  };

  return (
    <form className="container  w-25 for " style={{
      minWidth:650
    }} onSubmit={handleSubmit}>
      <div className="d-flex flex-wrap justify-content-center border border-primary rounded-2 w-100 ">
        <a className="m-2 mt-3 fs-5" href="https://github.com/ozkan4186">
          <code className="text-danger fs-3"> {`<ÖZKAN/>`} </code>
        </a>
        <h2 className="m-2  text-primary ">DESİGN</h2>
      </div>

      <br />
      <br />
      <h2 className="border border-none rounded-2 w-100 text-center border border-primary  text-primary ">
        ADD CONTACT
      </h2>
      <br />
      <br />
      <div
        style={{
          backgroundColor: "lightBlue",
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
            placeholder="USERNAME"
            onChange={handleChange}
            value={info.username}
            required
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
            required
          />
          <i className="fa-solid fa-phone  phone2 "></i>
        </div>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={handleChange}
          name="gender"
          value={info.gender}
          required
        >
          <option value="Male" selected>
            {" "}
            Please your do select{" "}
          </option>
          <option value="Other">Other</option>
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
