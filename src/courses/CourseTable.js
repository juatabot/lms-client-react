import { faTrash, faEdit, faThList, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CourseTable.css';
import CourseRow from './CourseRow';
import CourseEditor from './CourseEditor';

class CourseTable extends React.Component {
    constructor(props) {
        super(props);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.selectRow = this.selectRow.bind(this);
        this.deselectRow = this.deselectRow.bind(this);
        this.updateCourse = this.updateCourse.bind(this);
        this.state = {
            "selectedRows": [],
        }
    }

    deleteCourse() {
        this.state.selectedRows.forEach(rowId => {
            this.props.deleteCourse(rowId);
        });
    }

    updateCourse(courseId, newName) {
        this.props.updateCourse(courseId, newName);
    }

    selectRow(row) {
        this.setState((oldState) => ({
            selectedRows: [...oldState.selectedRows, row]
        }))
    };


    deselectRow(rowId) {
        this.setState({
            selectedRows: this.state.selectedRows.filter((row) => {
                return row !== rowId;
            })
        });
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Owner</th>
                        <th className="d-none d-lg-block">Last Modified</th>
                        <th>
                            <FontAwesomeIcon className="fa-fw" icon={faTrash} onClick={() => this.deleteCourse()} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.courses.map(course => (
                        <CourseRow
                            key={course._id}
                            course={course}
                            editCourse={this.props.editCourse}
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            selectRow={this.selectRow}
                            deselectRow={this.deselectRow} />
                    ))}
                </tbody>
            </table>
        );
    }
} export default CourseTable;