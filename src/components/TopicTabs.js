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
    <div className="card">
        <ul className="list-group-flush">
            <h2>Topics ({topics.length})</h2>
            {
                topics.map(topic =>
                    <li className="list-group-item" key={topic._id}>
                        <button className="btn btn-danger mr-1" onClick={() => deleteTopic(topic._id)}>
                            Delete
                         </button>
                        {
                            !topic.editing &&
                            <span>
                                <button className="btn btn-secondary mr-1" onClick={() => updateTopic({ ...topic, editing: true })}>
                                    Edit
                                </button>
                                {topic.title}
                            </span>
                        }
                        {
                            topic.editing &&
                            <span>
                                <button className="btn btn-secondary mr-1" onClick={() => updateTopic({ ...topic, editing: false })}>
                                    Ok
                                </button>
                                <input
                                    onChange={(e) => updateTopic({ ...topic, title: e.target.value })}
                                    value={topic.title} />
                            </span>
                        }
                    </li>
                )
            }
        </ul>
        <button className="btn btn-success mr-1" onClick={() =>
            createTopicForLesson(lessonId, { "title": "New Module" })}>
            Create
        </button>
    </div>

const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics,
    lessonId: state.topicReducer.lessonId,
})

const dispatchToPropertyMapper = (dispatch) => ({
    createTopicForLesson: (lessonId) =>
        topicService
            .createTopicForLesson(lessonId, { title: "New Topic" })
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic,
                lessonId
            }))
            .then(console.log(lessonId)),
    deleteTopic: (topicId) =>
        topicService.deleteTopic(topicId)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicId
            })),
    updateTopic: (topic) =>
        topicService.updateTopic(topic)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                topic
            })),
})

export default connect
    (stateToPropertyMapper, dispatchToPropertyMapper)
    (TopicTabs)
