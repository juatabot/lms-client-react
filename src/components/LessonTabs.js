import React from "react";
import { connect } from "react-redux";
import lessonService from "../services/LessonService"
import { Link } from "react-router-dom";


const LessonTabs = (
  {
    course,
    lessons = [],
    deleteLesson,
    createLessonForModule,
    moduleId,
    updateLesson,
  }) =>
  <div>
    <h2>Lessons ({lessons.length})</h2>
    <ul className="list-group list-group-horizontal">
      {
        lessons.map(lesson =>
          <li className="list-group-item" key={lesson._id}>
            <button className="btn btn-danger mr-1" onClick={() => deleteLesson(lesson._id)}>
              X
            </button>
            {
              !lesson.editing &&
              <span>
                <button className="btn btn-secondary mr-1" onClick={() => updateLesson({ ...lesson, editing: true })}>
                  Edit
                </button>
                <Link to={`/edit/${course._id}/modules/${moduleId}/lessons/${lesson._id}`}>
                  {lesson.title}
                </Link>
              </span>
            }
            {

              lesson.editing &&
              <span>
                <button className="btn btn-secondary mr-1" onClick={() => updateLesson({ ...lesson, editing: false })}>
                  Ok
            </button>
                <input
                  onChange={(e) => updateLesson({ ...lesson, title: e.target.value })}
                  value={lesson.title} />
              </span>
            }
          </li>
        )
      }
      <button className="btn btn-success mr-1" onClick={() =>
        createLessonForModule(moduleId)}>
        Create
    </button>
    </ul>
  </div>

const stateToPropertyMapper = (state) => ({
  course: state.courseReducer.course,
  lessons: state.lessonReducer.lessons,
  moduleId: state.lessonReducer.moduleId
})

const dispatchToPropertyMapper = (dispatch) => ({
  deleteLesson: (lessonId) =>
    lessonService.deleteLesson(lessonId)
      .then(status => dispatch({
        type: "DELETE_LESSON",
        lessonId
      })),
  createLessonForModule: (moduleId) =>
    lessonService
      .createLessonForModule(moduleId, { title: "New Lesson" })
      .then(lesson => dispatch({
        type: "CREATE_LESSON",
        lesson
      })),
  updateLesson: (lesson) =>
    lessonService.updateLesson(lesson)
      .then(status => dispatch({
        type: "UPDATE_LESSON",
        lesson
      })),
})

export default connect
  (stateToPropertyMapper, dispatchToPropertyMapper)
  (LessonTabs)
