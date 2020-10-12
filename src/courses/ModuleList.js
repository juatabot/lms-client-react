import React from 'react';
import Module from './Module';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

class ModuleList extends React.Component {
    render() {
        return (
            <div className="container">
                <ul className="list-group">
                    {this.props.modules.map(module => (
                        <Module
                            key={module}
                            module={module} />
                    ))}
                    <div className="container">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <FontAwesomeIcon className="fa-fw" icon={faPlus} />
                        </li>
                    </div>
                </ul>
            </div >
        )

    }
} export default ModuleList;