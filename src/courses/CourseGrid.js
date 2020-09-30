import React from 'react';
import './CourseGrid.css'


class CourseGrid extends React.Component {
    render() {
        return (
            <div class="card-deck">
                {this.props.courses.map((course, key) =>
                    <CourseCard course={course}
                        key={course._id} />)}
            </div>
        );
    }
} export default CourseGrid;

class CourseCard extends React.Component {
    render() {
        return (
            <div class="col-sm-4">
                <div class="card-body ">
                    <div class="card-title">{this.props.course.name}</div>
                    <div class="card-text">{this.props.course._id}</div>
                    <div class="card-text">
                        <small class="text-muted">
                            {this.props.course._updatedAt}
                        </small>
                    </div>
                </div>
            </div >
        );
    }
}