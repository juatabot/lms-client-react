import React from 'react';
import Module from './Module';


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
                </ul>
            </div >
        )

    }
} export default ModuleList;