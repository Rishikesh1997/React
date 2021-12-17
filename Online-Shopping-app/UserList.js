import React, { Component } from "react";
import { connect } from "react-redux";

class userList extends Component {
  state = {
    selectedUser: null,
  };

  onValueChangeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({
      selectedObject: { ...this.state.selectedUser, [name]: value },
    });
  };

  onResetClickHandler = (event) => {
    this.setState({ selectedUser: null });
  };

  render() {
    return (
      <>
        <table className={"table"}>
          <thead>
            <tr key="index">
              <th>Sr.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>mobileNumber</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {this.props.userList.map((user, index) => {
              return (
                <tr key="user.id">
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.mobileNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.userList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(userList);
