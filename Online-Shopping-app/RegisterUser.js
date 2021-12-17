import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class RegisterUser extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    mobileNumber: 0,
  };

  onFormSubmitHandler = (event) => {
    event.preventDefault();
    this.props.addUser(this.state);
  };

  onValueChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onResetClickHandler = (event) => {
    this.setState({ state: null });
  };

  render() {
    return (
      <div class="col-6" style={registerCSS.block}>
        <h1>In Registration Page</h1>

        <form onSubmit={this.onFormSubmitHandler}>
          <div className="mb-4">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Name"
              required
              name={"name"}
              value={this.state.name}
              onChange={this.onValueChangeHandler}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Email"
              required
              name={"email"}
              value={this.state.email}
              onChange={this.onValueChangeHandler}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter Password"
              required
              name={"password"}
              value={this.state.password}
              onChange={this.onValueChangeHandler}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Mobile Number</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Mobile Number"
              required
              name={"mobileNumber"}
              value={this.state.mobileNumber}
              onChange={this.onValueChangeHandler}
            />
          </div>

          <button
            className="btn btn-success"
            type="submit"
            onClick={this.props.onResetClickHandler}
          >
            Submit
          </button>
          <Link class="nav-link active" aria-current="page" to={"/login"}>
            LogIn here
          </Link>
          <Link class="nav-link active" aria-current="page" to={"/userList"}>
            List of User`s
          </Link>
        </form>
      </div>
    );
  }
}

const registerCSS = {
  block: {
    backgroundColor: "#e6fff9",
  },
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (payload) => dispatch({ type: "USER_ADD", payload: payload }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
