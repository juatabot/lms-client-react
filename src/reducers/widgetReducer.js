const initialState = {
  widgets: [],
  widget: {},
  selectType: "HEADING"
}

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_WIDGET_FOR_TOPIC":
      return {
        ...state,
        widgets: [
          ...state.widgets,
          action.widget
        ]
      }
    case "FIND_WIDGETS_FOR_TOPIC":
      return {
        ...state,
        widgets: action.widgets,
        topicId: action.topicId
      }
    case "DELETE_WIDGET":
      return {
        ...state,
        widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
      }
    case "CHANGE_SELECT":
      return {
        ...state,
        selectType: state.selectType === "HEADING" ? "PARAGRAPH" : "HEADING"
      }
    case "EDIT_WIDGET":
      return {
        ...state,
        widgets:
          state.widgets
            .map(widget =>
              widget.id === action.widget.id ?
                action.widget : widget)
      }
    case "UPDATE_WIDGET":
      return {
        ...state,
        widgets:
          state.widgets
            .map(widget =>
              widget.id === action.widget.id ?
                action.widget : widget)
      }
    default:
      return state
  }
}

export default widgetReducer