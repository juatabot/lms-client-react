import React from "react";
import { connect } from "react-redux";
import TopicService from "../services/TopicService";
import widgetService from "../services/WidgetService"
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";

const WidgetList = (
  {
    widgets = [],
    topicId,
    createWidgetForTopic,
    deleteWidget,
  }) =>
  <div className="card">
    <ul className="list-group-flush">
      <h2>Widgets ({widgets.length})</h2>
      {
        widgets.map(widget =>
          <li className="list-group-item" key={widget.id}>
            <button className="btn btn-danger mr-1" onClick={() => deleteWidget(widget.id)}>
              Delete
            </button>
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
      <select className="btn" defaultValue="heading">
        <option value="paragraph">Paragraph</option>
        <option value="heading">Heading</option>
      </select>
      <button className="btn btn-success" onClick={
        () => createWidgetForTopic(topicId)}>
        Create
    </button>
    </ul>
  </div>

const stateToPropMapper = (state) => ({
  widgets: state.widgetReducer.widgets,
  topicId: state.widgetReducer.topicId,
  widgetType: state.widgetReducer.widgetType,
})

const dispatchToPropertyMapper = (dispatch) => ({
  createWidgetForTopic: (topicId) =>
    widgetService.createWidgetForTopic(topicId, {
      name: "NEW WIDGET",
      type: "PARAGRAPH",
    }).then(widget => dispatch({
      type: "CREATE_WIDGET_FOR_TOPIC",
      widget,
    })),
  deleteWidget: (widgetId) =>
    widgetService.deleteWidget(widgetId)
      .then(status => dispatch({
        type: "DELETE_WIDGET",
        widgetId,
      })),
})

export default connect
  (stateToPropMapper, dispatchToPropertyMapper)
  (WidgetList)