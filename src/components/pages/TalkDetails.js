import React from 'react';
import { withRouter } from "react-router-dom";

class TalkDetails extends React.Component {
    constructor(params) {
        super(params);
    }

    render() {
        return (
            <div>
                <h2>TalkDetails id: {this.props.match.params.id}</h2>
            </div>
        );
    }
}

export default withRouter(TalkDetails);