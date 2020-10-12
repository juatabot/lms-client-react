import React from 'react';
import Topic from './Topic';
import './TopicPills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class TopicPills extends React.Component {
    render() {
        return (
            <ul className="nav nav-pills nav-fill">
                {this.props.pills.map(pill => (
                    <Topic
                        key={pill}
                        pill={pill} />
                ))}
                <li className="nav-item">
                    <FontAwesomeIcon className="fa-fw" icon={faPlus} />
                </li>
            </ul>
        )
    }
} export default TopicPills;