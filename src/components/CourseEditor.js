import React from "react";
import { findCourseById } from "../services/CourseService";
import moduleService from "../services/ModuleService";
import lessonService from "../services/LessonService"
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicTabs from "./TopicTabs";
import { connect } from "react-redux";
import topicService from "../services/TopicService";


class CourseEditor extends React.Component {

  state = {
    course: {
      title: "",
      _id: ""
    }
  }

  componentDidMount() {
    const courseId = this.props.match.params.courseId;
    const moduleId = this.props.match.params.moduleId;
    const lessonId = this.props.match.params.lessonId;

    this.props.findCourseById(courseId)
    this.props.findModulesForCourse(courseId)

    if (moduleId) {
      this.props.findLessonsForModule(moduleId)
    }
    if (lessonId) {
      this.props.findTopicsForLesson(lessonId);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const moduleId = this.props.match.params.moduleId;
    const previousModuleId = prevProps.match.params.moduleId;
    if (moduleId !== previousModuleId) {
      this.props.findLessonsForModule(moduleId);
    }

    const lessonId = this.props.match.params.lessonId;
    const previousLessonId = prevProps.match.params.lessonId;
    if (lessonId !== previousLessonId) {
      this.props.findTopicsForLesson(lessonId);
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-4">
            <ModuleList />
          </div>
          <div className="col-8">
            <LessonTabs />
            <TopicTabs />
          </div>
        </div>
      </div>
    )
  }
}

const stateToProperty = (state) => ({
  course: state.courseReducer.course
})
const propertyToDispatchMapper = (dispatch) => ({
  findTopicsForLesson: (lessonId) =>
    topicService
      .findTopicsForLesson(lessonId)
      .then(topics => dispatch({
        type: "FIND_TOPICS_FOR_LESSON",
        topics,
        lessonId,
      })),
  findLessonsForModule: moduleId => {
    lessonService.findLessonsForModule(moduleId)
      .then(lessons => dispatch({
        type: "FIND_LESSONS_FOR_MODULE",
        lessons,
        moduleId
      }))
  },
  findModulesForCourse: courseId =>
    moduleService.findModulesForCourse(courseId)
      .then(actualModules => dispatch({
        type: "FIND_MODULES_FOR_COURSE",
        modules: actualModules
      })),
  findCourseById: (courseId) => findCourseById(courseId)
    .then(actualCourse => dispatch({
      type: "FIND_COURSE_BY_ID",
      course: actualCourse
    }))
})

export default connect
  (stateToProperty, propertyToDispatchMapper)
  (CourseEditor)
