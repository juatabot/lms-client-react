import React from 'react';

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
                        <th>Last Modified</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.courses.map((course) =>
                        <CourseRow course={course} key={course._id} />
                    )}
                </tbody>
            </table>
        );
    }
} export default CourseTable;

class CourseRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.course)
        return (
            < tr >
                <td>
                {this.props.course.name}
                </td>
                <td>
                    {this.props.course._nuid}
                </td>
                <td>
                    {this.props.course._updatedAt}
                </td>
            </tr >
        );
    }
}