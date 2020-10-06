import React from 'react';
import { CourseService } from '../services/CourseService';
import CourseTable from './CourseTable';
import CourseGrid from './CourseGrid';
import './CourseView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPlusCircle, faThLarge, faTable } from '@fortawesome/free-solid-svg-icons'
import CourseEditor from './CourseEditor';
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

class CourseView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "courses": [],
            "tableActive": "table",
            "newCourseName": "",
            "editorMode": false,
            "editorModeCourseId": "",
        }
        this.toggleView = this.toggleView.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.addCourse = this.addCourse.bind(this);
        this.handleInputchange = this.handleInputchange.bind(this);
        this.updateCourse = this.updateCourse.bind(this);
        this.editCourse = this.editCourse.bind(this);
    }

    componentDidMount() {
        CourseService.findAllCourses()
            .then(resp => {
                this.setState({ "courses": resp });
            });
    }

    toggleView(e) {
        if (e != this.state.tableActive) {
            this.setState({ tableActive: this.state.tableActive == "table" ? "grid" : "table" });
        }
    }

    refreshCourses() {
        CourseService.findAllCourses()
            .then(resp => {
                this.setState({ "courses": resp });
            });
    }

    deleteCourse(courseId) {
        CourseService.deleteCourse(courseId)
            .then(() => {
                this.refreshCourses();
            });
    }

    updateCourse(courseId, newName) {
        CourseService.findCourseById(courseId)
            .then((resp) => {
                resp["name"] = newName;
                CourseService.updateCourse(courseId, resp)
                    .then(() => {
                        this.refreshCourses();
                    })
            })
    }

    handleInputchange(event) {
        this.setState({ newCourseName: event.target.value });
    }

    addCourse(event) {
        if (this.state.newCourseName) {
            const newCourse = { "name": this.state.newCourseName };
            CourseService.createCourse(newCourse)
                .then(() => {
                    this.setState({ "newCourseName": "" });
                    this.refreshCourses();
                });
        }
    }

    // go to course editor view
    editCourse(courseId) {
        this.setState({
            editorMode: true,
            editorModeCourseId: courseId
        });
    }

    render() {
        if (!this.state.editorMode) {
            return (
                <BrowserRouter>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return (
                                <Redirect to="/course/table" />
                            )
                        }}
                    />

                    <div className="container">
                        <h1 className="container-title">
                            Course Manager
                        </h1>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary" type="button"><FontAwesomeIcon icon={faBars} /></button>
                            </div>
                            <input type="text" className="form-control" placeholder="Add a new course..." value={this.state.newCourseName} onChange={this.handleInputchange} />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" onClick={this.addCourse} type="button"><FontAwesomeIcon icon={faPlusCircle} /></button>
                            </div>

                            <Link to="/course/grid">
                                <button onClick={() => this.toggleView("grid")} data-toggle="buttons" className="btn btn-outline-secondary" type="button"><FontAwesomeIcon icon={faThLarge} /></button>
                            </Link>
                            <Link to="/course/table">
                                <button onClick={() => this.toggleView("table")} data-toggle="buttons" className="btn btn-outline-secondary" type="button"><FontAwesomeIcon icon={faTable} /></button>
                            </Link>
                        </div>

                        <Route
                            path="/course/table"
                            render={() => <CourseTable editCourse={this.editCourse} updateCourse={this.updateCourse} deleteCourse={this.deleteCourse} courses={this.state.courses} />} >
                        </Route>
                        <Route
                            path="/course/grid"
                            render={() => <CourseGrid updateCourse={this.updateCourse} deleteCourse={this.deleteCourse} courses={this.state.courses} />}>
                        </Route>
                    </div >
                </BrowserRouter>
            );
        }
        else {
            return <CourseEditor courseId={this.state.editorModeCourseId} />
        }

    }
} export default CourseView;