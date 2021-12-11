import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [userList, setUserList] = useState([]);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [userName, setUserName] = useState("");

  const [userObject, setUserObject] = useState({
    //-----Global User Object------//
    name: "",
    email: "",
    username: "",
  });

  const [editObject, setEditObject] = useState({
    //-----Global Edit Object------//
    name: "",
    email: "",
    username: "",
  });

  const [id, setId] = useState(0);

  const [isEditMode, setIsEditMode] = useState(false);

  const [selectedUserId, setSelectedUserId] = useState(-1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response.data);
      if (response && response.data) {
        setUserList(response.data);
      }
    });
  };

  const onUserObjectChangeHandler = (event) => {
    if (event) {
      const { name, value } = event.target;

      setUserObject({
        ...userObject,
        [name]: value,
      });
    }
  };

  const onEditObjectChangeHandler = (event) => {
    if (event) {
      const { name, value } = event.target;

      setEditObject({
        ...editObject,
        [name]: value,
      });
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, userName);
    if (!isEditMode) {
      axios
        .post("https://jsonplaceholder.typicode.com/users", {
          name,
          email,
          userName,
          id: 1,
        })
        .then((response) => {
          console.log(response);
          alert("Added");
          fetchData();

          setUserObject({
            setName: "",
            setEmail: "",
            setUserName: "",
          });
        });
    } else {
      if (id > 0) {
        axios
          .put("https://jsonplaceholder.typicode.com/users/" + id, {
            name,
            email,
            userName,
            id: 1,
          })
          .then((response) => {
            if (response) {
              fetchData();
              alert("Updated...!");
              onResetClickHandler();
            }
          });
      }
    }
  };

  const onUpdateClickHandler = () => {
    if (id > 0) {
      axios
        .put("https://jsonplaceholder.typicode.com/users/" + id, {
          // name,
          // email,
          // userName,
          // id: 1,
          ...userObject,
        })
        .then((response) => {
          if (response) {
            fetchData();
            alert("Updated...!");
            onResetEditRow();
          }
        });
    }
  };

  const onDeleteClickHandler = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => {
        alert("Deleted..!");
        fetchData("");
      });
  };

  const onEditClickHandler = (userObject) => {
    setEditObject({
      ...userObject,
    });

    setId(userObject.id);
    setSelectedUserId(userObject.id);
  };

  const onResetClickHandler = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsEditMode(false);
    // setName("");
    // setEmail("");
    // setUserName("");
    userEntityObject(setUserObject);
  };

  const onResetEditRow = () => {
    setSelectedUserId(-1);
    setEditObject(userEntityObject(setEditObject));
  };

  return (
    <>
      <h1>From Userhooks</h1>
      <h2>User Form</h2>
      <form onSubmit={onFormSubmit}>
        <label>Name</label>

        <input
          name="name"
          value={userObject.name}
          onChange={onUserObjectChangeHandler}
        />

        <label>Email</label>

        <input
          name="email"
          value={userObject.email}
          onChange={onUserObjectChangeHandler}
        />

        <label>UserName</label>

        <input
          name="userName"
          value={userObject.username}
          onChange={onUserObjectChangeHandler}
        />

        <button type="submit">{isEditMode ? "Update" : "Submit"}</button>
        {isEditMode && <button onClick={onResetClickHandler}>Reset</button>}
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>UserName</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>

                <td>
                  {selectedUserId === user.id ? (
                    <input
                      name="name"
                      value={editObject.name}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    user.name
                  )}
                </td>

                <td>
                  {selectedUserId === user.id ? (
                    <input
                      name="email"
                      value={editObject.email}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    user.email
                  )}
                </td>

                <td>
                  {selectedUserId === user.id ? (
                    <input
                      name="username"
                      value={editObject.username}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    user.username
                  )}
                </td>

                <td>
                  {selectedUserId === user.id ? (
                    <>
                      <button onClick={onUpdateClickHandler}>Update</button>
                      <button onClick={onResetEditRow}>Reset</button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          onDeleteClickHandler(user.id);
                        }}
                      >
                        Delete
                      </button>

                      <button
                        onClick={() => {
                          onEditClickHandler(user);
                        }}
                      >
                        Edit
                      </button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

function userEntityObject(setUserObject) {
  setUserObject({
    setName: "",
    setEmail: "",
    setUserName: "",
  });
}
