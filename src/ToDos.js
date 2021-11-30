import axios from "axios";
import React, {Component} from "react"



export default class ToDosComponent extends Component {
    state = {
        todos: [],
        isEditMode: false,
        postObject: {
            title: "",
            body: "",
            userId: 1,
        },
    };

    onDeleteHandler = (id) => {
        axios
            .delete("https://jsonplaceholder.typicode.com/todos/" +id)
            .then((response) => {
                console.log(response);
                this.fetchData();
                alert("Deleted");
            });
    };

    onEditClickHandler = (id) => {
        const editObject = this.state.todos.find((post) => post.id === id );
        if (editObject) {
            this.setState({ postObject : editObject, isEditMode: true });
        }
    };

    resetState() {
        this.setState({
            postObject: {
                title: "",
                body: "",
                userId: 1,
            },
            isEditMode: false,
        });
    }

    onCancelClickHandler = (event) => {
        event.preventDefault();
         this.setState();  //({
        //     postObject: {
        //         title: "",
        //         body: "",
        //         userId: 1,
        //     },
        //     isEditMode: false,
        // });
    };

    onChangeHandler = (event) => {
        const {name , value}= event.target;
        const postObjectCopy = this.state.postObject;
        postObjectCopy[name] =value;
        this.setState({postObject: postObjectCopy});
    }

    onFormSubmitClick = (event) => {
        event.preventDefault();
        console.log(this.state);

        if (this.state.isEditMode) {
            //Edit
            axios
            .put(
                "https://jsonplaceholder.typicode.com/todos/"+
                this.state.postObject.id,
                this.state.postObject
            )
                .then((response) => {
                    console.log(response);
                    this.fetchData();
                    alert("Updated");
                    this.resetState();
                });
            }else {
                //Save
        }
        axios
        .post("https://jsonplaceholder.typicode.com/todos", this.state.postObject)
        .then((response) => {
            console.log(response);
            this.fetchData();
            alert("Created");
            this.setState({
                postObject: {
                    title: "",
                    body: "",
                    userId: 1,
                },
            })
        } 
        )
    };

    render () {
        return(
            <>
            <h1>IN ToDosComponent</h1>
            <form onSubmit = {this.onFormSubmitClick}>
                <label>Title</label>
                <input 
                name = "title"
                value = {this.state.postObject.title}
                onChange = {this.onChangeHandler}
                />
                <label>Body</label>
                <input 
                 name = "body"
                 value = {this.state.postObject.body}
                 onChange = {this.onChangeHandler}
                 />
                 <button type ="submit">
                     {this.state.isEditMode ? "Update" : "Submit"}</button>
                 <button onClick={this.onCancelClickHandler}>Cancel</button>
            </form>

            {this.state.todos.map((todos , index) => (
                <div key={index}>
                <div>
                    {index + 1}.{todos.title}
                </div>
                <button
                onClick={() => {
                    this.onDeleteHandler(todos.id);
                }}
                >Delete</button>
                <button
                    onClick={() => {
                        this.onEditClickHandler(todos.id);
                    }}
                    >
                        Edit
                        </button>
                <br />
                </div>
            ))}
    </>
    )
}
componentDidMount() 
{
    this.fetchData();
}

    fetchData() {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
            console.log(response.data);
            this.setState({ todos: response.data });
        });
    }
}