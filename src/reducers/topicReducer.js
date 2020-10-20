
export const topicReducer = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_TOPIC":
            return {
                ...state,
                topics: state
                    .topics
                    .map(topic =>
                        topic._id === action.topic._id ?
                            action.topic : topic)
            }
        case "FIND_TOPICS_FOR_LESSON":
            return {
                topics: action.topics,
                lessonId: action.lessonId
            }
        case "CREATE_TOPIC":
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ],
                lessonId: action.lessonId
            }
        case "DELETE_TOPIC":
            return {
                ...state,
                topics: state.topics.filter(topic => topic._id !== action.topicId)
            }
        default:
            return state
    }
}
