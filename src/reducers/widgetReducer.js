const initialState = {
  widgets: [],
  widget: {},
  selectType: "HEADING",
  preview: false,
  heading: "h1",
  list_type: "UNORDERED"
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
        selectType: action.selectType
      }
    case "CHANGE_PREVIEW":
      return {
        ...state,
        preview: !state.preview
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
    case "SELECT_HEADING":
      return {
        ...state,
        heading: action.heading
      }
    case "CHANGE_LIST_TYPE":
      return {
        ...state,
        list_type: action.list_type
      }
    case "REODER_WIDGETS":
      return {
        ...state,
        widgets: [...action.widgets.sort((a, b) => {
          if (a.order < b.order) return -1;
          if (a.order > b.order) return 1;
          return 0;
        })]
      }
    default:
      return state
  }
}

export default widgetReducer