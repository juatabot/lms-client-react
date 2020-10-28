import React from "react";
import { connect } from "react-redux";


const ParagraphWidget = ({ widget, preview, editWidget }) =>
  <div className="form-group">
    {preview && <text>{widget.src}</text>}
    {!preview &&
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        value={widget.src}
        onChange={(e) => editWidget({ ...widget, src: e.target.value })}
      ></textarea>}

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
  (ParagraphWidget)