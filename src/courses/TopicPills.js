import React from 'react';
import Topic from './Topic';
import './TopicPills.css'


class TopicPills extends React.Component {
    render() {
        return (
                <ul className="nav nav-pills nav-fill">
                    {this.props.pills.map(pill => (
                        <Topic
                            key={pill}
                            pill={pill} />
                    ))}
                </ul>
        )

    }
} export default TopicPills;