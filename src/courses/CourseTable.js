import { faTrash, faEdit, faThList, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CourseTable.css';

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
                        <CourseRow key={course._id} course={course} updateCourse={this.updateCourse} deleteCourse={this.deleteCourse} selectRow={this.selectRow} deselectRow={this.deselectRow} />
                    ))}
                </tbody>
            </table>
        );
    }
} export default CourseTable;

class CourseRow extends React.Component {
    constructor(props) {
        super(props)
        this.deleteCourse = this.deleteCourse.bind(this);
        this.handleInputchange = this.handleInputchange.bind(this);
        this.editCourse = this.editCourse.bind(this);
        this.updateCourse = this.updateCourse.bind(this);

        this.state = {
            active: false,
            editing: this.props.editing,
            newCourseName: "",
        }
    }

    handleInputchange(event) {
        this.setState({ newCourseName: event.target.value });
    }

    deleteCourse(courseId) {
        this.props.deleteCourse(courseId);
    }

    selectRow(rowId, e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.state.active) {
            this.props.deselectRow(rowId);
        }
        else {
            this.props.selectRow(rowId);
        }
        this.setState({ active: !this.state.active })
    }

    editingInput() {
        return (
            <div className="input-group input-group-sm">
                <input type="text" className="form-control" placeholder="New course name..." value={this.state.newCourseName} onChange={this.handleInputchange} />
            </div>
        )
    }

    editCourse() {
        this.setState({ editing: true });
    }

    updateCourse() {
        this.setState({ editing: false });
        this.props.updateCourse(this.props.course._id, this.state.newCourseName);
    }

    render() {
        return (
            <tr key={this.props.course._id} className={this.state.active ? "table-active" : ""} onClick={(e) => this.selectRow(this.props.course._id, e)}>
                <td className="font-weight-bold" >
                    {this.state.editing ? this.editingInput() : this.props.course.name}
                </td >
                <td>
                    {this.props.course._nuid}
                </td>
                <td className="d-none d-lg-block text-muted">
                    {this.props.course._updatedAt}
                </td>
                {/* <td className="text-muted">
                    {this.props.course._id}
                </td> */}
                <td>
                    <FontAwesomeIcon className="fa-fw" icon={faCheck} onClick={() => this.updateCourse()} />
                    <FontAwesomeIcon className="fa-fw" icon={faEdit} onClick={() => this.editCourse()} />
                </td>
            </tr >
        )
    }
}