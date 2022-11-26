import { ToastContainer } from "react-toastify";
import "./App.css";
import Form from "./components/form/Form";
import Contact from "./components/contact/Contact";
import { useState } from "react";
import { AddUser, EditUser } from "./utils/functions";
import ToastifySuccess from "./utils/customToastify";

const initialValues = {
  username: "",
  phoneNumber: "",
  gender: "",
};

function App() {
  const [info, setInfo] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (info.id) {
      EditUser(info);
      ToastifySuccess("Data changed.");
    } else {
      
      AddUser(info);
      ToastifySuccess("Data Added..");
    }
    setInfo(initialValues);
    
  };
  const handleUserEdit = (id, username, phoneNumber, gender) => {
    setInfo({ id, username, phoneNumber, gender });
  };


  return (
    <div className=" w-100 d-flex flex-wrap  justify-content-evenly align-items-center ">
      <Form info={info} setInfo={setInfo} handleSubmit={handleSubmit} />
       <Contact handleUserEdit={handleUserEdit} />
      <ToastContainer />
    </div>
  );
}

export default App;

