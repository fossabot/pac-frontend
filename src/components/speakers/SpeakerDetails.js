import React from 'react';
import {Link, withRouter} from "react-router-dom";
import rest from "../../utils/rest";

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

        rest.doGet("http://localhost:9090/persons/" + speakerId)
            .then((response) => {
                const speaker = response.data;

                rest.doGet("http://localhost:9090/talks/person/" + speakerId)
                    .then((response) => {
                        speaker.talks = response.data;

                        this.setState({
                            speaker: speaker,
                        });
                    }, (error) => {
                        console.log(error);
                    });

            }, (error) => {
                console.log(error);
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
                                <Link to={"/talkDetails/" + talk.id} key={talk.id} className="card-link">{talk.title}</Link>
                            )}
                        </dd>
                    </dl>
                </div>
            </div>
        );
    }
}

export default withRouter(SpeakerDetails);