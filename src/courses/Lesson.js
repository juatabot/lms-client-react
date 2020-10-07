import React from 'react';


class Lesson extends React.Component {
    render() {
        return (
            <div className="container">
                <li className="list-group-item">
                    {this.props.lesson}
                </li>
            </div >
        )
    }   
} export default Lesson;