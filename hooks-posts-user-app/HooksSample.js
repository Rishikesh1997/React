import axios from "axios";
import { useEffect, useState } from "react";

export default () => {
  const [postsList, setPostsList] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    //code to fetch data from server
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      if (response && response.data) {
        setPostsList(response.data);
      }
    });
  };

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onBodyChange = (event) => {
    setBody(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(title, body);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
        userId: 1,
      })
      .then((response) => {
        console.log(response);
        alert("Added");
        //fetch the data again
        fetchData("");
        //reset from
        setTitle("");
        setBody("");
      });
  };

  return (
    <>
      <h1>From HooksSample</h1>
      <h2>Post Form</h2>
      <form onSubmit={onFormSubmit}>
        <label>Title:</label>
        <input name="title" value={title} onChange={onTitleChange} />
        <label>Body:</label>
        <input name="body" value={body} onChange={onBodyChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {postsList.map((post, index) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
