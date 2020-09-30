import React from 'react';
import { CourseService } from '../services/CourseService';
import CourseTable from './CourseTable';
import CourseGrid from './CourseGrid';
import './CourseView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPlusCircle, faThLarge } from '@fortawesome/free-solid-svg-icons'

class CourseView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "courses": [],
            "tableActive": true,
            "newCourseName": "",
        }
        this.toggleView = this.toggleView.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.addCourse = this.addCourse.bind(this);
        this.handleInputchange = this.handleInputchange.bind(this);
    }

    componentDidMount() {
        CourseService.findAllCourses()
            .then(resp => {
                this.setState({ "courses": resp });
            });
    }

    toggleView() {
        this.setState({ "tableActive": !this.state.tableActive })
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

    handleInputchange(event) {
        this.setState({ newCourseName: event.target.value });
    }

    addCourse(event) {
        if (this.state.newCourseName) {
            const newCourse = { "name": this.state.newCourseName };
            CourseService.createCourse(newCourse)
                .then(() => {
                    this.setState({"newCourseName": "" });
                    this.refreshCourses();
                });
        }
    }

    render() {
        return (
            <div class="container">
                <h1 class="container-title">
                    Course Manager
                    </h1>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary" type="button"><FontAwesomeIcon icon={faBars} /></button>
                    </div>
                    <input type="text" class="form-control" placeholder="Add a new course..." value={this.state.newCourseName} onChange={this.handleInputchange} />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" onClick={this.addCourse} type="button"><FontAwesomeIcon icon={faPlusCircle} /></button>
                    </div>
                    <div>
                        <button onClick={this.toggleView} data-toggle="buttons" class="btn btn-outline-secondary" type="button"><FontAwesomeIcon icon={faThLarge} /></button>
                    </div>
                </div>
                { this.state.tableActive && <CourseTable deleteCourse={this.deleteCourse} courses={this.state.courses} />}
                { !this.state.tableActive && <CourseGrid courses={this.state.courses} />}
            </div >
        );
    }
} export default CourseView;