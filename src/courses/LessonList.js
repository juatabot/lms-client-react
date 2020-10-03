import React from 'react';
import { CourseService } from '../services/CourseService';
import Lesson from './Lesson';
import './LessonList.css'


class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <ul class="navbar-nav">
                        {this.props.lessons.map(lesson => (
                            <Lesson
                                key={lesson}
                                lesson={lesson} />
                        ))}
                    </ul>
                </nav>
            </div >
        )

    }
} export default LessonTabs;