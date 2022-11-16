import { ToastContainer } from "react-toastify";
import "./App.css";
import Form from "./components/form/Form";
import Contact from "./components/contact/Contact";
import { useState } from "react";
import { AddUser } from "./utils/functions";

const initialValues = {
  username: "",
  phoneNumber: "",
  gender: "",
};

function App() {
  const [info, setInfo] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();


    
    AddUser(info);
  };

  console.log(info);
  return (
    <div className=" w-100 d-flex  flex-wrap justify-content-evenly align-items-center ">
      <Form info={info} setInfo={setInfo} handleSubmit={handleSubmit} />

      <Contact />
      <ToastContainer />
    </div>
  );
}

export default App;
