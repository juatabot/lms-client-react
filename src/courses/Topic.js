import React from 'react';
import './Topic.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

class Pill extends React.Component {
    render() {
        return (
            <li className="nav-item">
                <span className="nav-link active d-flex justify-content-between align-items-center" href="#">
                    {this.props.pill}
                    <FontAwesomeIcon className="fa-fw" icon={faPencilAlt} />
                </span>
            </li>
        )
    }
} export default Pill;