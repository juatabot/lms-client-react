import React from 'react';


class Lesson extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <li class="list-group-item">
                    {this.props.lesson}
                </li>
            </div >
        )
    }   
} export default Lesson;