import axios from "axios";
import { useEffect, useState } from "react";

export default () => {
  const [postsList, setPostsList] = useState([]);

  const [title, setTitle] = useState("");

  const [body, setBody] = useState("");

  const [postId, setPostId] = useState(0);

  const [isEditMode, setIsEditMode] = useState(false);

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
    if (!isEditMode) {
      //code to add new records
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title,
          body,
          userId: 1,
        })
        .then((response) => {
          console.log(response);
          alert("Added...!");
          //fetch the data again
          fetchData("");
          //reset from
          setTitle("");
          setBody("");
        });
    } else {
      //code to edit the records
      if (postId > 0) {
        axios
          .put("https://jsonplaceholder.typicode.com/posts/" + postId, {
            id: postId,
            title,
            body,
            userId: 1,
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
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        alert("Deleted...!");
        fetchData("");
      });
  };

  const onEditClickHandler = (postObject) => {
    console.log(postObject);
    setIsEditMode(true);
    setTitle(postObject.title);
    setBody(postObject.body);
    setPostId(postObject.id);
  };

  const onResetClickHandler = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsEditMode(false);
    setTitle("");
    setBody("");
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
        <button type="submit">{isEditMode ? "Update" : "Submit"}</button>
        {isEditMode && <button onClick={onResetClickHandler}>Reset</button>}
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

                <td>
                  <button
                    onClick={() => {
                      onDeleteClickHandler(post.id);
                    }}
                  >
                    Delete
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => {
                      onEditClickHandler(post);
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
