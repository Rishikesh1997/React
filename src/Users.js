import axios from "axios";
import React, {Component} from "react"

export default class UserComponent extends Component {
    state = {
        users: [],
        isEditMode: false,
        userObj: {
            name: "",
            userid: 1,
            username: "",
            email: "",
            phone:"",
            website:"",
        },
    };

    onClickHandler=(id)=>{
        axios.delete("https://jsonplaceholder.typicode.com/users/" +id).then((response)=>{
            console.log(response);
            this.FetchMethod();
            alert("Deleted");
        });
    }
    onChangeHandler = (event) => {
        const {name,value}=event.target;
        const userObjectCopy=this.state.userObj;
        userObjectCopy[name]=value;
        this.setState({userObj:userObjectCopy});
    };
    onEditClickHandler = (id) => {
        const editObject=this.state.users.find((user) => user.id === id);
        if(editObject)
        {
            this.setState({
                userObj:editObject,isEditMode:true
            });
        }
    };
    resetState ()
    {
        this.setState({
            userObj:{
                name:"",
                username:"",
                email:"",
                userId:1,
                phone:"",
                website:"",
            },
            isEditMode:false,
        });
    }
  
    onChangeHandler = (event) => {
        const {name,value}=event.target;
        const userObjectCopy=this.state.userObj;
        userObjectCopy[name]=value;
        this.setState({userObj:userObjectCopy});
    };

    onCancelClickHandler = (event) =>{
        event.preventDefault();
        this.resetState();
    }
    onFormSubmitClick = (event) => {
        event.preventDefault();
        if(this.state.isEditMode)
        {
            axios.put("https://jsonplaceholder.typicode.com/users/"+this.state.userObj.id,this.state.userObj)
            .then((response)=> {console.log(response);
                this.FetchMethod();
                alert("Updated");
                this.resetState();
            })
        }
        else{
            console.log(this.state);
            axios.post("https://jsonplaceholder.typicode.com/users",this.state.userObj)
            .then((response) => {console.log(response);
                this.FetchMethod();
                alert("Created");
                this.resetState();
            })

        }
    };

 render(){

    return(
        <>
            <h1>USER</h1>
            <form onSubmit={this.onFormSubmitClick}>
            <label>Name</label>
                <input
                    name="name"
                    value={this.state.userObj.name}
                    onChange={this.onChangeHandler}
                />
                <br/>

                <label>UserName</label>
                <input
                    name="username"
                    value={this.state.userObj.username}
                    onChange={this.onChangeHandler}
                />
                 <br/>

                <label>Email</label>
                <input
                    name="email"
                    value={this.state.userObj.email}
                    onChange={this.onChangeHandler}
                />
                <br/>

              
                 <label>Phone</label>
                <input
                    name="phone"
                    value={this.state.userObj.phone}
                    onChange={this.onChangeHandler}
                />
                <br/>

                <label>Website</label>
                <input
                    name="website"
                    value={this.state.userObj.website}
                    onChange={this.onChangeHandler}
                />
                <button type="submit">{this.state.isEditMode ? "Update" : "Submit"}</button>
                <button onClick = {this.onCancelClickHandler}>Cancel</button>
            </form>
            {this.state.users.map((user,index)=>(
                <div key={index}>
                    <div>
                    {index+1}.{user.username}
                    </div>
                    <br/>
                    <button onClick={()=>{
                this.onClickHandler(user.id); }}>Delete</button>

                <button onClick={() =>{
                    this.onEditClickHandler(user.id);
                }}>Edit</button>

                </div>
                
                 ))}
            </>
    )
}
componentDidMount()
{
    this.FetchMethod();
}

FetchMethod() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
        console.log(response.data);
        this.setState({ users: response.data });
    });
}
};