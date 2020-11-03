import React from "react";
import { connect } from "react-redux";
import TopicService from "../services/TopicService";
import widgetService, { updateWidget } from "../services/WidgetService"
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";

const WidgetList = (
  {
    widgets = [],
    topicId,
    createWidgetForTopic,
    deleteWidget,
    changeSelect,
    selectType,
    updateWidget,
    changePreview,
    preview,
    moveWidgetUp,
    moveWidgetDown,
  }) =>
  <div className="card">
    <ul className="list-group-flush">
      <h2>Widgets ({widgets.length})</h2>
      <form>
        <div className="form-row">
          <div className="col">
            <button className="btn btn-success" onClick={
              () => widgets.forEach(widget => updateWidget(widget))}>
              Save
            </button>
          </div>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" onChange={() => changePreview()} />
                Preview
            </div>
          </div>
        </div>
      </form>

      {
        widgets.sort((a, b) => {
          if (a.order < b.order) return 1;
          if (a.order > b.order) return -1;
          return 0;
        }).map(widget =>

          <li className="list-group-item" key={widget.id}>
            {!preview &&
              <div>

                <button className="btn btn-danger mr-1" onClick={() => moveWidgetUp(widget)}>
                  Up
                </button>
                <button className="btn btn-danger mr-1" onClick={() => moveWidgetDown(widget)}>
                  Down
                </button>
                <button className="btn btn-danger mr-1" onClick={() => deleteWidget(widget.id)}>
                  Delete
                </button>
              </div>}
            {
              widget.type === "HEADING" &&
              <HeadingWidget widget={widget} preview={preview} />
            }
            {
              widget.type === "PARAGRAPH" &&
              <ParagraphWidget widget={widget} preview={preview} />
            }
          </li>
        )
      }
      {!preview &&
        <div>
          <select className="btn" defaultValue="heading" onClick={() => changeSelect()}>
            <option value="paragraph">Paragraph</option>
            <option value="heading">Heading</option>
          </select>
          <button className="btn btn-success" onClick={
            () => createWidgetForTopic(topicId, selectType)}>
            Create
          </button>
        </div>}
    </ul>
  </div>

const stateToPropMapper = (state) => ({
  widgets: state.widgetReducer.widgets,
  topicId: state.widgetReducer.topicId,
  widgetType: state.widgetReducer.widgetType,
  selectType: state.widgetReducer.selectType,
  preview: state.widgetReducer.preview,
})

const dispatchToPropertyMapper = (dispatch) => ({
  createWidgetForTopic: (topicId, selectType) =>
    widgetService.createWidgetForTopic(topicId, {
      name: "NEW WIDGET",
      type: selectType,
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
  changeSelect: () =>
    dispatch({
      type: "CHANGE_SELECT",
    }),
  updateWidget: (widget) =>
    widgetService.updateWidget(widget)
      .then(status => dispatch({
        type: "UPDATE_WIDGET",
        widget,
      })),
  changePreview: () =>
    dispatch({
      type: "CHANGE_PREVIEW"
    }),
  moveWidgetDown: (widget) => {
    widget.order = widget.order - 1;
    widgetService.updateWidget(widget);
  },
  moveWidgetUp: (widget) => {
    widget.order = widget.order + 1;
    widgetService.updateWidget(widget);
  },
})

export default connect
  (stateToPropMapper, dispatchToPropertyMapper)
  (WidgetList)