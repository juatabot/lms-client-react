import React from "react";
import { connect } from "react-redux";
import widgetService from "../services/WidgetService"

const ImageWidget = ({ widget, preview, editWidget }) =>
    <div className="input-group">
        {preview &&
            <img src={widget.src} alt="alternatetext"></img>
        }

        {!preview &&
            <div>
                <input
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Image URL"
                    value={widget.src}
                    onChange={(e) => editWidget({ ...widget, src: e.target.value })}
                ></input>
            </div>
        }
    </div>


const stateToPropMapper = (state) => ({
})

const dispatchToPropertyMapper = (dispatch) => ({
    editWidget: (widget) =>
        dispatch({
            type: "EDIT_WIDGET",
            widget
        }),
})

export default connect
    (stateToPropMapper, dispatchToPropertyMapper)
    (ImageWidget)
