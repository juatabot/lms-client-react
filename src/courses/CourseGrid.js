import React from 'react';
import './CourseGrid.css'


class CourseGrid extends React.Component {
    render() {
        return (
            <div class="card-deck">
                {this.props.courses.map((course, key) =>
                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="card-body ">
                            <div class="card-title font-weight-bold">{course.name}</div>
                            <div class="card-subtitle mb-2 text-muted">{course._nuid}</div>
                            <div class="card-text">
                                <small class="text-muted">
                                    {course._updatedAt}
                                </small>
                            </div>
                        </div>
                    </div >
                )}
            </div>
        );
    }
} export default CourseGrid;