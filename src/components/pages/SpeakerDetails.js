import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {organizations, speakers as testSpeakers} from "../../testdata/data";

class SpeakerDetails extends React.Component {
    constructor(params) {
        super(params);
        this.state = {
            speaker: {
                id: "",
                organization: {},
                talks: [],
            }
        };
    }

    componentDidMount() {
        const speakerId = this.props.match.params.id;

        // TODO call API here
        const speakers = testSpeakers.slice();
        speakers.forEach(speaker => {
            speaker.talks = [{ id: 1, name: "HEHEHE"}, { id: 2, name: "Jhahahahaava"}];
        })
        this.setState({
            speaker: speakers[speakerId - 1],
        });
    }

    render() {
        const {
            name,
            talks,
        } = this.state.speaker;

        return (
            <div className="container">
                <div className="row mt-5">
                    <dl className="row">
                        <dt className="col-sm-3">Speaker</dt>
                        <dd className="col-sm-9">{name}</dd>

                        <dt className="col-sm-3">Talks</dt>
                        <dd className="col-sm-9">
                            {talks.map((talk) =>
                                <Link to={"/talkDetails/" + talk.id} className="card-link">{talk.name}</Link>
                            )}
                        </dd>
                    </dl>
                </div>
            </div>
        );
    }
}

export default withRouter(SpeakerDetails);