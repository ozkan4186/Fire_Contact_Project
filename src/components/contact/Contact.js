import Table from "react-bootstrap/Table";
import { DeleteUser,GetUser } from "../../utils/functions";

function Contact({ handleUserEdit }) {
  const { contactList } = GetUser();
  console.log(contactList);
  return (
    <div
      className="container w-50 contact d-flex flex-wrap "
      style={{
        backgroundColor: "lightblue",
        borderRadius: "10px",
        minWidth:600
      }}
    >
      <Table sx={{minWidth:650}} striped bordered hover className="mx-auto p-1 mt-3 text-center ">
        <thead>
          <tr className="text-danger">
            <th>Username</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {contactList?.map((item, index) => {
            return (
              <tr key={index} >
                <td>{item.username}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.gender}</td>

                <td
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <i
                    onClick={() => DeleteUser(item.id)}
                    className="fa-solid fa-trash"
                  ></i>
                </td>
                <td
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <i
                    onClick={() =>
                      handleUserEdit(
                        item?.id,
                        item?.username,
                        item?.phoneNumber,
                        item?.gender
                      )
                    }
                    className="fa-solid fa-pen-to-square"
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Contact;
