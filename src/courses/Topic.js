import React from 'react';
import './Topic.css'

class Pill extends React.Component {
    render() {
        return (
            <li className="nav-item">
                <a className="nav-link active" href="#">{this.props.pill}</a>
            </li>
        )
    }
} export default Pill;