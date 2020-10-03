import React from 'react';
import { CourseService } from '../services/CourseService';
import Module from './Module';


class ModuleList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <ul class="list-group">
                    {this.props.modules.map(module => (
                        <Module
                            key={module}
                            module={module} />
                    ))}
                </ul>
            </div >
        )

    }
} export default ModuleList;