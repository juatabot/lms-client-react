import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

class Lesson extends React.Component {
    render() {
        return (
            <li className="nav-item">
                <span class="nav-link active d-flex justify-content-between align-items-center">
                    {this.props.lesson}
                    <FontAwesomeIcon className="fa-fw" icon={faPencilAlt} />
                </span>
            </li>
        )
    }
} export default Lesson;