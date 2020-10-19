
export const topicReducer = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_TOPIC":
            return {
                ...state,
                topic: state
                    .topic
                    .map(topic =>
                        topic._id === action.topic._id ?
                            action.topic : topic)
            }
        case "CREATE_TOPIC":
            console.log(state);
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case "FIND_TOPICS_FOR_LESSON":
            return {
                topics: action.topics,
                lessonId: action.lessonId
            }
        case "CREATE_TOPIC":
            console.log("creating lesson");
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        default:
            return state
    }
}
