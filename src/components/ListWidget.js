import React from "react";
import { connect } from "react-redux";
import widgetService from "../services/WidgetService"

const ListWidget = ({ widget, preview, editWidget, changeListType, list_type }) =>
    <div className="input-group">
        {preview && list_type === "UNORDERED" ?
            <ul>
                {widget.src.split(/\n/).map(li => <li>{li}</li>)}
            </ul>
            : null}
        {preview && list_type === "ORDERED" ?
            <ol>
                {widget.src.split(/\n/).map(li => <li>{li}</li>)}
            </ol>
            : null}

        {!preview &&
            <div>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={widget.src}
                    onChange={(e) => editWidget({ ...widget, src: e.target.value })}
                ></textarea>
                <div className="input-group-append">
                    <select className="btn" onChange={(e) => changeListType(e.target.value)}>
                        <option value="unordered">Unordered</option>
                        <option value="ordered">Ordered</option>
                    </select>
                </div>
            </div>
        }
    </div>


const stateToPropMapper = (state) => ({
    list_type: state.widgetReducer.list_type,
})

const dispatchToPropertyMapper = (dispatch) => ({
    editWidget: (widget) =>
        dispatch({
            type: "EDIT_WIDGET",
            widget
        }),
    changeListType: (list_type) => {
        let new_list_type = list_type.toUpperCase();
        dispatch({
            type: "CHANGE_LIST_TYPE",
            list_type: new_list_type
        })
    }

})

export default connect
    (stateToPropMapper, dispatchToPropertyMapper)
    (ListWidget)
