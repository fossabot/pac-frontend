import React from 'react';
import { withRouter } from "react-router-dom";

class SpeakerDetails extends React.Component {
    constructor(params) {
        super(params);
    }

    render() {
        return (
            <div>
                <h2>SpeakerDetails id: {this.props.match.params.id}</h2>
            </div>
        );
    }
}

export default withRouter(SpeakerDetails);