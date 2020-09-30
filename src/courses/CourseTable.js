import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CourseTable.css';

class CourseTable extends React.Component {
    constructor(props) {
        super(props);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    deleteCourse(courseId) {
        this.props.deleteCourse(courseId);
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Owner</th>
                        <th class="d-none d-lg-block">Last Modified</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.courses.map((course) =>
                        <tr key={course._id}>
                            <td class="font-weight-bold">
                                {course.name}
                            </td>
                            <td>
                                {course._nuid}
                            </td>
                            <td class="d-none d-lg-block text-muted">
                                {course._updatedAt}
                            </td>
                            <td>
                                <FontAwesomeIcon class="fa-fw" icon={faEdit} />
                                <div>
                                    <FontAwesomeIcon class="fa-fw" icon={faTrash} onClick={() => this.deleteCourse(course._id)} />
                                </div>
                            </td>
                        </tr >
                    )}
                </tbody>
            </table>
        );
    }
} export default CourseTable;