import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const [profdata, profdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/profile/detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/profile/edit/" + id);
  };
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("localhost:5000/user/getUserDetails" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  //localhost:5000/user/getUserDetails get user details
  useEffect(() => {
    fetch("https://mocki.io/v1/975c7fac-bb98-41ae-b9a0-374d3b72871f")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        profdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Profile Page</h2>
        </div>
        <div className="card-body">
          <div className="divbtn"></div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Username</td>
                <td>Firstname</td>
                <td>Lastname</td>
                <td>Email:</td>
                <td>Address</td>
                <td>OptIntoPhyStatements</td>
              </tr>
            </thead>
            <tbody>
              {profdata &&
                profdata.map((item) => (
                  <tr key={item.UserID}>
                    <td>{item.Username}</td>
                    <td>{item.Firstname}</td>
                    <td>{item.Lastname}</td>
                    <td>{item.Email}</td>
                    <td>{item.Address}</td>
                    <td>{item.OptIntoPhyStatements}</td>
                    <td>
                      <a
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-primary"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
