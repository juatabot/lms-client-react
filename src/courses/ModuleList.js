import React from 'react';
import Module from './Module';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPencilAlt, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import {
    DELETE_MODULE,
    CREATE_MODULE,
    UPDATE_MODULE,
    updateModule,
    createModule,
    deleteModule
} from '../actions/ModuleActions';

const ModuleList = ({
    course,
    modules = [],
    deleteModule,
    createModule,
    updateModule
}) =>
    (
        <div className="container">
            <ul className="list-group">
                {modules.map(module => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={module.title}>
                        {
                            module.editing &&
                            <div className="input-group d-flex justify-content-between align-items-center">
                                <input type="text" className="form-control"
                                    onChange={(event) =>
                                        updateModule({ ...module, title: event.target.value })
                                    }
                                    value={module.title} />

                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" onClick={() =>
                                        updateModule({ ...module, editing: false })} type="button">
                                        <FontAwesomeIcon className="fa-fw" icon={faCheck} />
                                    </button>
                                </div>
                            </div>
                        }
                        {
                            !module.editing &&
                            <div className="d-flex justify-content-between align-items-center">
                                {module.title}
                                <FontAwesomeIcon
                                    className="fa-fw"
                                    icon={faPencilAlt}
                                    onClick={
                                        () => updateModule({ ...module, editing: true })} />
                            </div>
                        }
                        <FontAwesomeIcon className="fa-fw" icon={faTimes} onClick={() => deleteModule(module)} />
                    </li>
                ))}
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <FontAwesomeIcon className="fa-fw" icon={faPlus} onClick={() => createModule(course, { title: "New Module" })} />
                </li>
            </ul>
        </div >
    )

const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules,
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteModule: (module) => deleteModule(dispatch, module),
    createModule: (course, module) => createModule(dispatch, course, module),
    updateModule: (module) => updateModule(dispatch, module)
})

export default connect
    (stateToPropertyMapper,
        propertyToDispatchMapper)
    (ModuleList)