import React from "react";
import { connect } from "react-redux";
import {
  DELETE_MODULE,
  CREATE_MODULE,
  UPDATE_MODULE,
  updateModule,
  createModule,
  deleteModule
} from "../actions/moduleActions";
import { Link } from "react-router-dom";

const ModuleList = (
  { course,
    modules = [],
    deleteModule,
    createModule,
    updateModule }) =>

  <div className="card">
    <ul className="list-group-flush">
      <h1>{course.title}</h1>
      {
        modules.map(module =>
          <li className="list-group-item" key={module._id}>
            <button
              className="btn btn-danger mr-1"
              onClick={() => deleteModule(module)}>
              Delete
          </button>
            {
              module.editing &&
              <span>
                <button className="btn btn-secondary mr-1" onClick={() =>
                  updateModule({ ...module, editing: false })
                }>
                  Ok
                </button>
                <input
                  onChange={(event) =>
                    updateModule({ ...module, title: event.target.value })
                  }
                  value={module.title} />
              </span>
            }
            {
              !module.editing &&
              <span>
                <button className="btn btn-secondary mr-1" onClick={
                  () => updateModule({ ...module, editing: true })}>
                  Edit
                </button>
                <Link to={`/edit/${course._id}/modules/${module._id}`}>
                  {module.title}
                </Link>
              </span>
            }
          </li>)
      }
    </ul>
    <button className="btn btn-success mr-1" onClick={() => createModule(course, { title: "New Module" })}>
      Create Module
    </button>
  </div>

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
