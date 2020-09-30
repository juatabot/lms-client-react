import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CourseTable.css';

class CourseTable extends React.Component {
    constructor(props) {
        super(props);
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
                        // <CourseRow course={course} key={course._id} />

                        <tr>
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
                                <FontAwesomeIcon class="fa-fw" icon={faTrash} />
                            </td>
                        </tr >
                    )}
                </tbody>
            </table>
        );
    }
} export default CourseTable;