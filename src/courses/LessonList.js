import React from 'react';
import { CourseService } from '../services/CourseService';
import Lesson from './Lesson';


class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <ul class="list-group list-group-horizontal">
                    {this.props.lessons.map(lesson => (
                        <Lesson
                            key={lesson}
                            lesson={lesson} />
                    ))}
                </ul>
            </div >
        )

    }
} export default LessonTabs;