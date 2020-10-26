const initialState = {
  widgets: [],
  widget: {}
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
    default:
      return state
  }
}

export default widgetReducer