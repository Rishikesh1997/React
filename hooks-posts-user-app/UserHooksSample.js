import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [userList, setUserList] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    Fetchdata();
  }, []);

  const Fetchdata = () => {
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
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(name, email);
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name,
        email,
        userId: 1,
      })
      .then((response) => {
        console.log(response);
        alert("Added");
        Fetchdata();
        setName("");
        setEmail("");
      });
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
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
