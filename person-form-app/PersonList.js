import React, { Component } from "react";
import { connect } from "react-redux";

class PersonList extends Component {
  state = {
    selectedObject: null,
  };

  onEditClickHandler = (person) => {
    console.log("Edit", person);
    this.setState({ selectedObject: person });
  };

  onValueChangeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({
      selectedObject: { ...this.state.selectedObject, [name]: value },
    });
  };

  onResetClickHandler = (event) => {
    this.setState({ selectedObject: null });
  };

  render() {
    console.log(this.props.personList);
    return (
      <>
        <h1>Person List</h1>
        <table className={"table"}>
          <thead>
            <tr key="index">
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Age</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {this.props.personList.map((person, index) => {
              return (
                <tr key="person.id">
                  <td>{person.id}</td>

                  <td>
                    {this.state.selectedObject &&
                    this.state.selectedObject.id === person.id ? (
                      <input
                        name="name"
                        value={this.state.selectedObject.name}
                        onChange={this.onValueChangeHandler}
                      />
                    ) : (
                      person.name
                    )}
                  </td>

                  <td>
                    {this.state.selectedObject &&
                    this.state.selectedObject.id === person.id ? (
                      <input
                        name="age"
                        value={this.state.selectedObject.age}
                        onChange={this.onValueChangeHandler}
                      />
                    ) : (
                      person.age
                    )}
                  </td>

                  <td>
                    {this.state.selectedObject &&
                    this.state.selectedObject.id === person.id ? (
                      <>
                        <button
                          className="btn btn-warning"
                          onClick={() => {
                            //code to make row value update
                            this.props.updatePerson({
                              ...this.state.selectedObject,
                            });
                            this.onResetClickHandler();
                          }}
                        >
                          Update
                        </button>
                        &nbsp;&nbsp;
                        <button
                          className="btn btn-info"
                          onClick={() => {
                            //code to reset the row
                            this.onResetClickHandler();
                          }}
                        >
                          Reset
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            this.props.deletePersonByIndex(person);
                          }}
                        >
                          Drop
                        </button>
                        &nbsp;&nbsp;
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            //code to make the row editable
                            this.onEditClickHandler(person);
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
  }
}

const mapStateToProps = (state) => {
  return {
    personList: state.personList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePersonByIndex: (index) =>
      dispatch({ type: "PERSON_DELETE", payload: index }),

    updatePerson: (person) =>
      dispatch({ type: "PERSON_UPDATE", payload: person }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
