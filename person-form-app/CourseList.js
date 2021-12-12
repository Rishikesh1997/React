import React, { Component } from "react";
import { connect } from "react-redux";

class CourseList extends Component {

    render () {
        return (
            <>
            <h1>CourseList</h1>
            <table  className={"table"}>
                <thead>
                    <tr key="index">
                        <th>Sr.No.</th>
                        <th>Course Name</th>
                        <th>Fees</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.courseList.map((course, index) => {
                        return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{course.name}</td>
                            <td>{course.fees}</td>
                            <td><button 
                            className="btn btn-danger"
                            onClick={() => {
                                this.props.deleteCourseByIndex(index)
                            }}
                            >Drop</button></td>
                        </tr>
                        ) ;
                     })}
                </tbody>
            </table>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courseList: state.courseList,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCourseByIndex: (index) => dispatch({ type: "COURSE_DELETE", payload: index}),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(CourseList);