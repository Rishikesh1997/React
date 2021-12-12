import React, { Component } from "react";
import { connect } from "react-redux";

class CourseForm extends Component {

    state = {
        name: "",
        fees: 0,
    };

    onValueChangeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    onFormSubmitHandler = (event) => {
        event.preventDefault();
        this.props.addCourse(this.state);
    };

    render () {
        return (
            <>
            <h1>CourseForm</h1>
            <form onClick={this.onFormSubmitHandler}>
            <div className="mb-3">
                <label className="form-label">Course Name: </label>
                <br/>
                <input 
                className="form-control"
                name={"name"}
                value={this.state.name}
                onChange={this.onValueChangeHandler}
                />
                </div>

                <br/>
         
                <div className="mb-3">
                <label>Course Fees: </label>
                <br/>
                <input 
                className="form-control"
                name={"fees"}
                value={this.state.fees}
                onChange={this.onValueChangeHandler}
                />
                </div>

                <button className="btn btn-success" type="submit">Submit</button>
            </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCourse: (payload) => dispatch({ type: "COURSE_ADD", payload: payload})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseForm);
