import React from 'react';


class Module extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    {this.props.module}
                    < span className="badge badge-primary badge-pill">14</span>
                </li>
            </div >
        )

    }
} export default Module;