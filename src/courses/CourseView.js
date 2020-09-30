import React from 'react';
import { CourseService } from '../services/CourseService';
import CourseTable from './CourseTable';

class CourseView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "courses": []
        }
    }

    componentDidMount() {
        CourseService.findAllCourses()
            .then(resp => {
                this.setState({ "courses": resp });
            });
    }

    render() {
        return (
            <CourseTable courses={this.state.courses} />
        );
    }
} export default CourseView;