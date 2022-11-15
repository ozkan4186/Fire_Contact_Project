import Table from "react-bootstrap/Table";
import { GetUser } from "../../utils/functions";

function Contact() {
  const { contactList, isLoading } = GetUser();
  console.log(contactList);
  return (
    <div className="container w-50 contact bg-danger ">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {contactList?.map((item, index) => {
            return(
                        <tr>
        <td>{item.phoneNumber}</td>
        <td>{item.gender}</td>
        <td>{item.username}</td>
        <td>delete</td>
        <td>edit</td>
      </tr>
            )
      
      
      
      
      
      
      
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Contact;
