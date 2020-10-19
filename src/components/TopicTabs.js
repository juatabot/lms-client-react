import React from "react";
import { connect } from "react-redux";
import topicService from "../services/TopicService";


const TopicTabs = (
    {
        lessonId,
        createTopicForLesson,
        topics = [],
        deleteTopic,
        updateTopic,
    }) =>
    <div>
        <h1>Topics ({topics.length})</h1>
        <ul>
            {
                topics.map(topic =>
                    <li key={topic._id}>
                        <button className="btn btn-danger mr-1" onClick={() => deleteTopic(topic._id)}>
                            Delete
                         </button>
                        <button className="btn btn-secondary mr-1" onClick={() => updateTopic({ ...topic, editing: true })}>
                            Edit
                        </button>
                        <button className="btn btn-secondary mr-1" onClick={() => updateTopic({ ...topic, editing: false })}>
                            Ok
                        </button>
                        {
                            !topic.editing &&
                            <span>
                                {topic.title}
                            </span>
                        }
                        {
                            topic.editing &&
                            <input
                                onChange={(e) => updateTopic({ ...topic, title: e.target.value })}
                                value={topic.title} />
                        }
                    </li>
                )
            }
        </ul>
        <button className="btn btn-success mr-1" onClick={() =>
            createTopicForLesson(lessonId)}>
            Create
        </button>
    </div>

const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics,
    // lessonId: state.topicsReducer.lessonId,
})

const dispatchToPropertyMapper = (dispatch) => ({
    createTopicForLesson: (lessonId) =>
        topicService
            .createTopicForLesson(lessonId, { title: "New Topic" })
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            })),
    deleteTopic: (topicId) =>
        topicService.deleteTopic(topicId)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicId
            })),
})

export default connect
    (stateToPropertyMapper, dispatchToPropertyMapper)
    (TopicTabs)
