const topicsUrl = "http://localhost:8080/api/topics"
const widgetsUrl = "http://localhost:8080/api/widgets"

export const findWidgetsForTopic = (topicId) =>
  fetch(`${topicsUrl}/${topicId}/widgets`)
    .then(response => response.json())

export const createWidgetForTopic = (topicId, widget) =>
  fetch(`${topicsUrl}/${topicId}/widgets`,
    {
      method: "POST",
      body: JSON.stringify({
        ...widget,
        topicId
      }),
      headers: {
        "content-type": "application/json"
      }
    })
    .then(response => response.json())

export const deleteWidget = (widgetId) =>
  fetch(`${widgetsUrl}/${widgetId}`, {
    method: "DELETE"
  }).then(response => console.log(widgetId)); 

export default {
  findWidgetsForTopic, createWidgetForTopic, deleteWidget
}