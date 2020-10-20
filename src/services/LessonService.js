const moduleUrl = "https://wbdv-generic-server.herokuapp.com/api/juat/modules"
const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/juat/lessons"

export const findLessonsForModule = (moduleId) =>
  fetch(`${moduleUrl}/${moduleId}/lessons`)
    .then(response => response.json())

export const deleteLesson = (lessonId) =>
  fetch(`${lessonUrl}/${lessonId}`, {
    method: "DELETE"
  })
    .then(response => response.json())

export const createLessonForModule = (moduleId, newLesson) =>
  fetch(`${moduleUrl}/${moduleId}/lessons`, {
    method: "POST",
    body: JSON.stringify(newLesson),
    headers: {
      "content-type": "application/json"
    }
  }).then(response => response.json())

export const updateLesson = (newLesson) =>
  fetch(`${lessonUrl}/${newLesson._id}`, {
    method: "PUT",
    body: JSON.stringify(newLesson),
    headers: {
      "content-type": "application/json"
    }
  }).then(response => response.json())

export default {
  findLessonsForModule,
  deleteLesson,
  createLessonForModule,
  updateLesson
}
