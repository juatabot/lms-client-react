import { faTrash, faEdit, faThList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CourseTable.css';

class CourseTable extends React.Component {
    constructor(props) {
        super(props);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.selectRow = this.selectRow.bind(this);
        this.deselectRow = this.deselectRow.bind(this);
        this.state = {
            "selectedRows": [],
        }
    }

    deleteCourse() {
        this.state.selectedRows.forEach(rowId => {
            this.props.deleteCourse(rowId);
        });
    }

    selectRow(row) {
        this.setState({
            selectedRows: [...this.state.selectedRows, row]
        })
    }

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
                            <div className="fa-inline">
                                <FontAwesomeIcon className="fa-fw" icon={faTrash} onClick={() => this.deleteCourse()} />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.courses.map(course => (
                        <CourseRow key={course._id} course={course} deleteCourse={this.deleteCourse} selectRow={this.selectRow} deselectRow={this.deselectRow} />
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
        this.state = {
            active: false,
        }
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

    render() {
        return (
            <tr key={this.props.course._id} className={this.state.active ? "table-active" : ""} onClick={(e) => this.selectRow(this.props.course._id, e)}>
                < td className="font-weight-bold" >
                    {this.props.course.name}
                </td >
                <td>
                    {this.props.course._nuid}
                </td>
                <td className="d-none d-lg-block text-muted">
                    {this.props.course._updatedAt}
                </td>
                <td>
                    <div className="fa-inline">
                        <FontAwesomeIcon className="fa-fw" icon={faEdit} />
                    </div>
                </td>
            </tr >
        )
    }
}