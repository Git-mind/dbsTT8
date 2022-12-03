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
    fetch("http://localhost:5000/user/getUserDetails/1 ")
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
  console.log(profdata);

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
                  <tr key={item.data.UserID}>
                    <td>{item.data.Username}</td>
                    <td>{item.data.Firstname}</td>
                    <td>{item.data.Lastname}</td>
                    <td>{item.data.Email}</td>
                    <td>{item.data.Address}</td>
                    <td>{item.data.OptIntoPhyStatements}</td>
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
