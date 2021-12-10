import { useEffect, useState } from "react";
import axios from "axios";

export default () => {

  const [userList, setUserList] = useState([]);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  
  const [userName, setUserName] = useState("");

  const [id, setId] = useState(0);

  const [isEditMode, setIsEditMode] = useState(false);

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

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, userName);
    if(!isEditMode) {
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
        setName("");
        setEmail("");
        setUserName("");
      });
    }
    else {
      if(id > 0) {
        axios.put("https://jsonplaceholder.typicode.com/users/" + id, {
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

  const onDeleteClickHandler = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => {
        alert("Deleted..!");
        fetchData("");
      });
  };

  const onEditClickHandler = (userObject) => {
    console.log(userObject);
    setIsEditMode(true);
    setName(userObject.name);
    setEmail(userObject.email);
    setUserName(userObject.username);
    setId(userObject.id);
  };

  const onResetClickHandler = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsEditMode(false);
    setName("");
    setEmail("");
    setUserName("");
  };


  return (
    <>
      <h1>From Userhooks</h1>
      <h2>User Form</h2>
      <form onSubmit={onFormSubmit}>

        <label>Name</label>
        <input name="name" value={name} onChange={onNameChange} />

        <label>Email</label>
        <input name="email" value={email} onChange={onEmailChange} />

        <label>UserName</label>
        <input name="userName" value={userName} onChange={onUserNameChange} />

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
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>

                <td>
                  <button onClick={() => {
                    onDeleteClickHandler(user.id);
                  }}>Delete</button>
                </td>

                <td>
                  <button
                    onClick={() => {
                      onEditClickHandler(user);
                    }}
                  >
                    Edit
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
