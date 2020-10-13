import React from 'react';
import { CourseService } from '../services/CourseService';
import ModuleList from './ModuleList';
import Lessons from './LessonList';
import TopicPills from './TopicPills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import moduleService from "../services/ModuleService";
import { connect } from "react-redux";



class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "modules": ["M1", "M2", "M3"],
            "lessons": ["L1", "L2", "L3"],
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

        this.props.findCourseById(this.props.courseId)
        this.props.findModulesForCourse(this.props.courseId)
    }

    render() {
        return (
            <div className="container">
                <h1 className="container-title">
                    <FontAwesomeIcon className="fa-fw" icon={faTimes} />
                    Course Editor - {this.state.courseName}
                </h1>
                <div className="row">
                    <div className="col-sm-3">
                        <ModuleList modules={this.state.modules} />
                    </div>
                    <div className="col-sm-9">
                        <Lessons lessons={this.state.lessons} />
                        <TopicPills pills={this.state.pills} />
                    </div>
                </div>
            </div >
        )
    }
}

const stateToProperty = (state) => ({
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    findModulesForCourse: courseId => moduleService.findModulesForCourse(courseId)
        .then(actualModules => dispatch({
            type: "FIND_MODULES_FOR_COURSE",
            modules: actualModules
        })),
    findCourseById: (courseId) => CourseService.findCourseById(courseId)
        .then(actualCourse => dispatch({
            type: "FIND_COURSE_BY_ID",
            course: actualCourse
        }))
})

export default connect
    (stateToProperty, propertyToDispatchMapper)
    (CourseEditor)