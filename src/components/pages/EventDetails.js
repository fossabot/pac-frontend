import React from 'react';
import {Link, withRouter} from "react-router-dom";

class EventDetails extends React.Component {
    constructor(params) {
        super(params);
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <h2>EventDetails id: {this.props.match.params.id}</h2>
                </div>
            </div>
        );
    }
}

export default withRouter(EventDetails);