import React from "react";
import { connect } from "react-redux";
import widgetService from "../services/WidgetService"


const HeadingWidget = ({ widget, preview, editWidget }) =>
  <div className="input-group">
    {preview && <h1>{widget.src}</h1>}
    {!preview &&
      <div><input
        id="input-area"
        type="text"
        class="form-control"
        value={widget.src}
        onChange={(e) => editWidget({ ...widget, src: e.target.value })} />
        <div className="input-group-append">
          <select className="btn">
            <option>Heading 1</option>
            <option>Heading 2</option>
            <option>Heading 3</option>
            <option>Heading 4</option>
          </select>
        </div></div>}
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
