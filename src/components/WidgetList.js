import React from "react";
import { connect } from "react-redux";
import widgetService from "../services/WidgetService"
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";

const WidgetList = (
  {
    widgets = [],
    topicId,
    createWidgetForTopic
  }) =>
  <div className="card">
    <ul className="list-group-flush">
      <h2>Widgets</h2>
      {
        widgets.map(widget =>
          <li className="list-group-item" key={widget._id}>
            {
              widget.type === "HEADING" &&
              <HeadingWidget widget={widget} />
            }
            {
              widget.type === "PARAGRAPH" &&
              <ParagraphWidget widget={widget} />
            }
          </li>
        )
      }
      <button className="btn btn-success" onClick={
        () => createWidgetForTopic(topicId)}>
        Create
    </button>
    </ul>
  </div>

const stateToPropMapper = (state) => ({
  widgets: state.widgetReducer.widgets,
  topicId: state.widgetReducer.topicId
})

const dispatchMapper = (dispatch) => ({
  createWidgetForTopic: (topicId) =>
    widgetService.createWidgetForTopic(topicId, {
      name: "NEW WIDGET",
      type: "PARAGRAPH"
    }).then(widget => dispatch({
      type: "CREATE_WIDGET_FOR_TOPIC",
      widget
    }))
})
export default connect
  (stateToPropMapper, dispatchMapper)
  (WidgetList)