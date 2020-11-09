import React from "react";
import { connect } from "react-redux";
import TopicService from "../services/TopicService";
import widgetService, { updateWidget } from "../services/WidgetService"
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";

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
              <input class="form-check-input" type="checkbox" id="defaultCheck1" onChange={() => changePreview()} />
                Preview
            </div>
          </div>
        </div>
      </form>

      {
        widgets.map(widget =>

          <li className="list-group-item" key={widget.id}>
            {!preview &&
              <div>
                {
                  widgets.indexOf(widget) > 0 &&
                  <button className="btn btn-danger mr-1" onClick={() => moveWidgetUp(widgets, widget)}>
                    Up
                  </button>
                }
                {
                  widgets.indexOf(widget) < widgets.length - 1 &&
                  <button className="btn btn-danger mr-1" onClick={() => moveWidgetDown(widgets, widget)}>
                    Down
                  </button>
                }
                <button className="btn btn-danger mr-1" onClick={() => deleteWidget(widget.id)}>
                  Delete
                </button>
              </div>}
            {
              widget.widget_type === "HEADING" &&
              <HeadingWidget widget={widget} preview={preview} />
            }
            {
              widget.widget_type === "PARAGRAPH" &&
              <ParagraphWidget widget={widget} preview={preview} />
            }
            {
              widget.widget_type === "LIST" &&
              <ListWidget widget={widget} preview={preview}></ListWidget>
            }
            {
              widget.widget_type === "IMAGE" &&
              <ImageWidget widget={widget} preview={preview}></ImageWidget>
            }
          </li>
        )
      }
      {!preview &&
        <div>
          <select className="btn" defaultValue="heading" onClick={(e) => changeSelect(e.target.value)}>
            <option value="paragraph">Paragraph</option>
            <option value="heading">Heading</option>
            <option value="list">List</option>
            <option value="image">Image</option>
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

var swapArrayElements = function (arr, indexA, indexB) {
  var temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
}

const dispatchToPropertyMapper = (dispatch) => ({
  createWidgetForTopic: (topicId, selectType) =>
    widgetService.createWidgetForTopic(topicId, {
      name: "NEW WIDGET",
      widget_type: selectType,
      widget_order: 0,
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
  changeSelect: (selected) => {
    let selectType = selected.toUpperCase();
    console.log(selectType);
    dispatch({
      type: "CHANGE_SELECT",
      selectType,
    })
  },

  updateWidget: (widget) => {
    widgetService.updateWidget(widget)
      .then(status => dispatch({
        type: "UPDATE_WIDGET",
        widget,
      }))
  },
  changePreview: () =>
    dispatch({
      type: "CHANGE_PREVIEW"
    }),
  moveWidgetDown: (widgets, widget) => {
    swapArrayElements(widgets, widget.order, widget.order + 1);
    widgets.forEach((widget, idx) => widget.order = idx);
    widgetService.updateWidget(widget);
    dispatch({
      type: "REODER_WIDGETS",
      widgets,
    })
  },
  moveWidgetUp: (widgets, widget) => {
    swapArrayElements(widgets, widget.order, widget.order - 1);
    widgets.forEach((widget, idx) => widget.order = idx);
    widgetService.updateWidget(widget);
    dispatch({
      type: "REODER_WIDGETS",
      widgets,
    })
  },
})

export default connect
  (stateToPropMapper, dispatchToPropertyMapper)
  (WidgetList)