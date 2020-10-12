import React from 'react';
import Lesson from './Lesson';
import './LessonList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class Lessons extends React.Component {
    render() {
        return (
            <div>
                <ul class="nav nav-tabs nav-fill">
                    {this.props.lessons.map(lesson => (
                        <Lesson
                            key={lesson}
                            lesson={lesson} />
                    ))}
                    <li class="nav-item">
                        <a class="nav-link active">
                            <FontAwesomeIcon className="fa-fw" icon={faPlus} />
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
} export default Lessons;