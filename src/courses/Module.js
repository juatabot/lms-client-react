import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

class Module extends React.Component {
    render() {
        return (
            <div className="container">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    {this.props.module}
                    <FontAwesomeIcon className="fa-fw" icon={faPencilAlt} />
                </li>
            </div >
        )
    }
} export default Module;