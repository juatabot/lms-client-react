const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/juat/lessons"
const topicUrl = "https://wbdv-generic-server.herokuapp.com/api/juat/topics"

export const findTopicsForLesson = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}/topics`)
        .then(response => response.json())

export const createTopicForLesson = (lessonId, newTopic) =>
    fetch(`${lessonUrl}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(newTopic),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const saveTopic = (newTopic) =>
    fetch(`${topicUrl}/${newTopic._id}`, {
        method: "PUT",
        body: JSON.stringify(newTopic),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const deleteTopic = (topicId) =>
    fetch(`${topicUrl}/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export default {
    findTopicsForLesson,
    createTopicForLesson,
    deleteTopic,
    saveTopic,
}
