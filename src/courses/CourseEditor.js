import React from 'react';
import { CourseService } from '../services/CourseService';
import ModuleList from './ModuleList';
import LessonTabs from './LessonList';
import TopicPills from './TopicPills';


class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "modules": ["Module 1", "Module 2", "Module 3"],
            "lessons": ["Lesson 1", "Lesson 2", "Lesson 3"],
            "courseName": "",
            "pills": ["Pill 1", "Pill 2", "Pill 3"],
        }
    }

    componentDidMount() {
        CourseService.findCourseById(this.props.courseId)
            .then((resp) => {
                this.setState({
                    course: resp,
                    courseName: resp.name
                });
            })
    }

    render() {
        return (
            <div className="container">
                <h1 className="container-title">
                    Course Editor - {this.state.courseName}
                </h1>
                <div className="row">
                    <div className="col-sm-3">
                        <ModuleList modules={this.state.modules} />
                    </div>
                    <div className="col-sm-9">
                        <LessonTabs lessons={this.state.lessons} />
                        <TopicPills pills={this.state.pills} />
                    </div>
                </div>
            </div >
        )
    }
} export default CourseEditor;