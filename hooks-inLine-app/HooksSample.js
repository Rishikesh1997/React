import axios from "axios";
import { useEffect, useState } from "react";

export default () => {
  const [postsList, setPostsList] = useState([]);

  const defaultPostId = -1;

  const [title, setTitle] = useState("");

  const [titleEditMode, setTitleEditMode] = useState(""); //defined in editObject()

  const [body, setBody] = useState("");

  const [bodyEditMode, setBodyEditMode] = useState(""); //defined in editObject()

  const [postObject, setPostObject] = useState({
    //-----Global Post Object------//
    title: "",
    body: "",
  });

  const [editObject, setEditObject] = useState({
    //-----Global Edit Object------//
    title: "",
    body: "",
  });

  const [postId, setPostId] = useState(0);

  const [isEditMode, setIsEditMode] = useState(false);

  const [selectedPostId, setSelectedPostId] = useState(defaultPostId);

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

  const onPostObjectChangeHandler = (event) => {
    if (event) {
      const { name, value } = event.target;

      setPostObject({
        ...postObject,
        [name]: value,
      });
    }
  };

  const onEditObjectChangeHandler = (event) => {
    //----------------------------//
    // const titleOld = {
    //   title: "a",
    //   body: "b",
    // };

    // const titleNew = {
    //   // title: titleOld.title,
    //   // body: titleOld.body,

    //   ...titleOld,
    //   title: "c",
    // };
    //---------------------------------//

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

          // setPostObject({
          //   title: "",
          //   body: "",
          // });

          postEntityObject(setPostObject);
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

  const onUpdateClickHandler = () => {
    if (postId > 0) {
      axios
        .put("https://jsonplaceholder.typicode.com/posts/" + postId, {
          // id: postId,
          // title,
          // body,
          // userId: 1,
          ...postObject,
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
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        alert("Deleted...!");
        fetchData("");
      });
  };

  const onEditClickHandler = (postObject) => {
    console.log(postObject);

    //    setIsEditMode(true);

    // //    setTitle(postObject.title);
    //     setTitleEditMode(postObject.title);

    // //    setBody(postObject.body);
    //     setBodyEditMode(postObject.body);

    setEditObject({
      // title: postObject.title,
      // body: postObject.body,
      ...postObject,
    });

    setPostId(postObject.id);
    setSelectedPostId(postObject.id);
  };

  const onResetClickHandler = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsEditMode(false);
    // setTitle("");
    // setBody("");
    postEntityObject(setPostObject);
  };

  const onResetEditRow = () => {
    setSelectedPostId(defaultPostId);
    setEditObject(postEntityObject(setPostObject));
  };

  return (
    <>
      <h1>From HooksSample</h1>
      <h2>Post Form</h2>
      <form onSubmit={onFormSubmit}>
        <label>Title:</label>
        <input
          name="title"
          value={postObject.title}
          onChange={onPostObjectChangeHandler}
        />
        <label>Body:</label>
        <input
          name="body"
          value={postObject.body}
          onChange={onPostObjectChangeHandler}
        />
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

                <td>
                  {selectedPostId === post.id ? (
                    <input
                      name="title"
                      value={editObject.title}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    post.title
                  )}
                </td>

                <td>
                  {selectedPostId === post.id ? (
                    <input
                      name="body"
                      value={editObject.body}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    post.body
                  )}
                </td>

                <td>
                  {selectedPostId === post.id ? (
                    <>
                      <button onClick={onUpdateClickHandler}>Update</button>
                      <button onClick={onResetEditRow}>Reset</button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          onDeleteClickHandler(post.id);
                        }}
                      >
                        Delete
                      </button>

                      <button
                        onClick={() => {
                          onEditClickHandler(post);
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

function postEntityObject(setPostObject) {
  setPostObject({
    title: "",
    body: "",
  });
}
