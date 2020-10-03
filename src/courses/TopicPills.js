import React from 'react';
import { CourseService } from '../services/CourseService';
import Topic from './Topic';
import './TopicPills.css'


class TopicPills extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <ul class="nav nav-pills nav-fill">
                    {this.props.pills.map(pill => (
                        <Topic
                            key={pill}
                            pill={pill} />
                    ))}
                </ul>
        )

    }
} export default TopicPills;