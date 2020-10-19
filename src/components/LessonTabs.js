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
    <h1>Lessons ({lessons.length})</h1>
    <ul>
      {
        lessons.map(lesson =>
          <li key={lesson._id}>
            <button className="btn btn-danger mr-1" onClick={() => deleteLesson(lesson._id)}>
              Delete
            </button>
            <button className="btn btn-secondary mr-1" onClick={() => updateLesson({ ...lesson, editing: true })}>
              Edit
            </button>
            <button className="btn btn-secondary mr-1" onClick={() => updateLesson({ ...lesson, editing: false })}>
              Ok
            </button>
            {
              !lesson.editing &&
              <span>  
                <Link to={`/edit/${course._id}/modules/${moduleId}/lessons/${lesson._id}`}>
                  {lesson.title}
                </Link>
              </span>
            }
            {
              lesson.editing &&
              <input
                onChange={(e) => updateLesson({ ...lesson, title: e.target.value })}
                value={lesson.title} />
            }
          </li>
        )
      }
    </ul>
    <button className="btn btn-success mr-1" onClick={() =>
      createLessonForModule(moduleId)}>
      Create
    </button>
  </div>

const stateToPropertyMapper = (state) => ({
  course: state.courseReducer.course,
  lessons: state.lessonReducer.lessons,
  moduleId: state.lessonReducer.moduleId
})

const dispatchToPropertyMapper = (dispath) => ({
  saveLesson: (lesson) =>
    lessonService.saveLesson(lesson),
  deleteLesson: (lessonId) =>
    lessonService.deleteLesson(lessonId)
      .then(status => dispath({
        type: "DELETE_LESSON",
        lessonId
      })),
  createLessonForModule: (moduleId) =>
    lessonService
      .createLessonForModule(moduleId, { title: "New Lesson" })
      .then(lesson => dispath({
        type: "CREATE_LESSON",
        lesson
      })),
  updateLesson: (lesson) => dispath({
    type: "UPDATE_LESSON",
    lesson
  })
})

export default connect
  (stateToPropertyMapper, dispatchToPropertyMapper)
  (LessonTabs)
