import React from 'react';
import { faTrash, faEdit, faThList, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CourseTable from './CourseTable';
import CourseRow from './CourseRow';
import './CourseGrid.css';
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";


class CourseGrid extends CourseTable {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <FontAwesomeIcon className="fa-fw deleteBtn" icon={faTrash} onClick={() => this.deleteCourse()} />
                </nav>
                <div className="card-deck">
                    {this.props.courses.map((course, key) =>
                        <CourseCard
                            key={course._id}
                            course={course}
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            selectRow={this.selectRow}
                            deselectRow={this.deselectRow} />
                    )}
                </div>
            </div>
        );
    }
} export default CourseGrid;

class CourseCard extends CourseRow {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
                key={this.props.course._id}
                onClick={(e) => this.selectRow(this.props.course._id, e)}>

                <div className="card">
                    <div className={this.state.active ? "card-body text-primary bg-dark" : "card-body text-primary"}>
                        <div className="card-title font-weight-bold">
                            <Link to={`/course/edit/${this.props.course._id}`}>
                                {this.state.editing ? this.editingInput() : this.props.course.name}
                            </Link>
                        </div>
                        <div className="card-subtitle mb-2 text-muted">{this.props.course._nuid}</div>
                        <small className="text-muted">
                            {this.props.course._updatedAt}
                        </small>
                        <div>
                            <FontAwesomeIcon className="fa-fw" icon={faCheck} onClick={() => this.updateCourse()} />
                            <FontAwesomeIcon className="fa-fw" icon={faEdit} onClick={() => this.editCourse()} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}