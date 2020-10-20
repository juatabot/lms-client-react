import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";
import { Profile } from "./Profile";
import CourseListComponent from "./CourseListComponent";
import CourseEditor from "./CourseEditor";

export class CourseManager extends React.Component {
  render() {
    return (
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <ul class="navbar-nav mr-auto">
            <Link className="nav-item active nav-link" to="/login">Login</Link>
            <Link className="nav-item active nav-link" to="/register">Register</Link>
            <Link className="nav-item active nav-link" to="/profile">Profile</Link>
            <Link className="nav-item active nav-link" to="/courses">Course List</Link>
          </ul>
        </nav>

        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/courses" exact component={CourseListComponent} />
        <Route path={[
          "/edit/:courseId",
          "/edit/:courseId/modules/:moduleId",
          "/edit/:courseId/modules/:moduleId/lessons/:lessonId"
        ]}
          exact
          component={CourseEditor} />

      </Router>
    )
  }
}
