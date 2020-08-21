import React from 'react';
import {withRouter} from "react-router-dom";

class EventDetails extends React.Component {

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