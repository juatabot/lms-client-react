import React from 'react';
import Lesson from './Lesson';
import './LessonList.css'


class LessonTabs extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav">
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