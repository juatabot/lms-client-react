import React from 'react';
import { CourseService } from '../services/CourseService';
import ModuleList from './ModuleList';
import LessonTabs from './LessonList';


class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "modules": ["m1", "m2", "m3"],
            "lessons": ["l1", "l2", "l3"]
        }
    }

    componentDidMount() {
        CourseService.findCourseById(this.props.courseId)
            .then((resp) => {
                this.setState({ course: resp });
                console.log(resp);
            })
    }

    render() {
        return (
            <div className="container">
                <h1 className="container-title">
                    Course Editor
                </h1>
                <div className="row">
                    <div className="col-sm-3">
                        <ModuleList modules={this.state.modules} />
                    </div>
                    <div className="col-sm-9">
                        <LessonTabs lessons={this.state.lessons} />
                    </div>
                </div>
            </div >
        )
    }
} export default CourseEditor;