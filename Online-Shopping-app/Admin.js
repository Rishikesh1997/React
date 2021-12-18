import { useEffect, useState } from "react";
import { getAdminById, getAdminList } from "./Admin.service";

export default () => {
  const [adminList, setAdminList] = useState([]);

  useEffect(() => {
    getAdminList().then((response) => {
      if (response && response.data) {
        setAdminList(response.data);
      }
    });
  }, []);
  const onGetDetailsClickHandler = (adminId) => {
    getAdminById(adminId).then((response) => {
      if (response && response.data) {
        alert("Name: " + response.data.name);
      }
    });
  };

  return (
    <>
      <h1 className="text-centre">Admin List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {adminList.map((admin) => {
            return (
              <tr key={admin.adminId}>
                <td>{admin.name}</td>
                <td>{admin.password}</td>
                <td>
                  <button
                    onClick={() => {
                      onGetDetailsClickHandler(admin.adminId);
                    }}
                  >
                    Get Details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
