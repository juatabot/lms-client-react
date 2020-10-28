import React from "react";
import { connect } from "react-redux";
import widgetService from "../services/WidgetService"


const HeadingWidget = ({ widget, editWidget }) =>
  <div class="input-group">
    <input
      id="input-area"
      type="text"
      class="form-control"
      value={widget.src}
      onChange={(e) => editWidget({ ...widget, src: e.target.value })} />
    <div class="input-group-append">
      <select className="btn">
        <option>Heading 1</option>
        <option>Heading 2</option>
        <option>Heading 3</option>
        <option>Heading 4</option>
      </select>
    </div>
  </div>

const dispatchToPropertyMapper = (dispatch) => ({
  editWidget: (widget) =>
    dispatch({
      type: "EDIT_WIDGET",
      widget
    })
})

export default connect
  (null, dispatchToPropertyMapper)
  (HeadingWidget)
