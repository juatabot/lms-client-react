import {
    DELETE_MODULE,
    CREATE_MODULE,
    UPDATE_MODULE,
} from "../actions/ModuleActions";

const initialState = {
    modules: [
        {
            _id: "123",
            title: "React.js",
            editing: false
        },
        {
            _id: "234",
            title: "Redux.js",
            editing: true
        },
        {
            _id: "345",
            title: "jQuery",
            editing: false
        },
    ]
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_MODULES_FOR_COURSE":
            return {
                modules: action.modules
            }
        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
        case DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id !== action.module._id)
            }
        case UPDATE_MODULE:
            return {
                modules: state.modules.map(module => module._id === action.module._id ? action.module : module)

            }
        default:
            return state
    }
}

export default moduleReducer