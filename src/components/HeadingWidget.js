import React from "react";
import { connect } from "react-redux";
import widgetService from "../services/WidgetService"


const HeadingWidget = ({ widget, preview, editWidget, selectHeading, heading }) =>
  <div className="input-group">
    {preview && heading === "h1" ? <h1>{widget.src}</h1> : null}
    {preview && heading === "h2" ? <h2>{widget.src}</h2> : null}
    {preview && heading === "h3" ? <h3>{widget.src}</h3> : null}
    {!preview &&
      <div><input
        id="input-area"
        type="text"
        class="form-control"
        value={widget.src}
        onChange={(e) => editWidget({ ...widget, src: e.target.value })} />
        <div className="input-group-append">
          <select className="btn" onChange={(e) => selectHeading(e.target.value)}>
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
          </select>
        </div></div>}
  </div>



const stateToPropMapper = (state) => ({
  heading: state.widgetReducer.heading,
})

const dispatchToPropertyMapper = (dispatch) => ({
  editWidget: (widget) =>
    dispatch({
      type: "EDIT_WIDGET",
      widget
    }),
  selectHeading: (heading) =>
    dispatch({
      type: "SELECT_HEADING",
      heading,
    })
})

export default connect
  (stateToPropMapper, dispatchToPropertyMapper)
  (HeadingWidget)
