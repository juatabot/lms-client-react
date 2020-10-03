import React from 'react';
import './Topic.css'

class Pill extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li class="nav-item">
                <a class="nav-link active" href="#">{this.props.pill}</a>
            </li>
        )
    }
} export default Pill;