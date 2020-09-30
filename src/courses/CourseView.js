import React from 'react';
import { CourseService } from '../services/CourseService';
import CourseTable from './CourseTable';
import CourseGrid from './CourseGrid';
import './CourseView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPlusCircle, faThLarge } from '@fortawesome/free-solid-svg-icons'

class CourseView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "courses": [],
            "tableActive": true,
        }
        this.toggleView = this.toggleView.bind(this);
    }

    componentDidMount() {

        CourseService.deleteCourse();
        CourseService.findAllCourses()
            .then(resp => {
                this.setState({ "courses": resp });
            });
    }

    toggleView() {
        this.setState({ "tableActive": !this.state.tableActive })
    }

    render() {
        return (
            <div class="container">
                <h1 class="container-title">
                    Course Manager
                    </h1>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary" type="button"><FontAwesomeIcon icon={faBars} /></button>
                    </div>
                    <input type="text" class="form-control" placeholder="Add a new course..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button"><FontAwesomeIcon icon={faPlusCircle} /></button>
                    </div>
                    <button onClick={this.toggleView} data-toggle="buttons" class="btn btn-outline-secondary" type="button"><FontAwesomeIcon icon={faThLarge} /></button>
                </div>
                { this.state.tableActive && <CourseTable courses={this.state.courses} />}
                { !this.state.tableActive && <CourseGrid courses={this.state.courses} />}
            </div >
        );
    }
} export default CourseView;