import React, { Component } from "react"
import CourseForm from "./CourseForm"
import CourseList from "./CourseList"

export default class Course extends Component {

    render () {
        return (
            <>
            <h1>Courses</h1>
            <br />
            <div className="row">
                <div className="col-md-4">
            <CourseForm />
                </div>
                <div className="col-md-8">
            <CourseList />
            </div>
            </div>
            </>
        )
    }
}