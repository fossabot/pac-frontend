import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {talks as testTalks} from "../../testdata/data";
import Rest from "../../rest";

class TalkDetails extends React.Component {
    constructor(params) {
        super(params);
        this.state = {
            talk: {
                title: "",
                language: "",
                level: "",
                persons: [],
                topics: [],
                talkDates: [],
            },
        };
    }

    componentDidMount() {
        const talkId = this.props.match.params.id;

        const rest = new Rest();
        rest.doGet("http://localhost:9090/talks/" + talkId)
            .then((response) => {
                const talk = response.data;

                this.setState({
                    talk: talk,
                });
            }, (error) => {
                console.log(error);
            });
    }

    render() {

        const {
            title,
            language,
            level,
            persons,
            topics,
            talkDates,
        } = this.state.talk;

        return (
            <div className="container">
                <div className="row mt-5">
                    <dl className="row">
                        <dt className="col-sm-3">Talk Title</dt>
                        <dd className="col-sm-9">{title}</dd>

                        <dt className="col-sm-3">Language</dt>
                        <dd className="col-sm-9">{language}</dd>

                        <dt className="col-sm-3">Level</dt>
                        <dd className="col-sm-9">{level}</dd>

                        <dt className="col-sm-3">Persons</dt>
                        <dd className="col-sm-9">
                            {persons.map((person) =>
                                <Link to={"/speakerDetails/" + person.id} className="card-link">{person.name}</Link>
                            )}
                        </dd>

                        <dt className="col-sm-3">Topics</dt>
                        <dd className="col-sm-9">
                            {topics.map((topic) =>
                                <span className="badge badge-info mx-1">{topic.name}</span>
                            )}
                        </dd>

                        <dt className="col-sm-3">Events</dt>
                        <dd className="col-sm-9">
                            {talkDates.map((talkDate) =>
                                <Link to={"/eventDetails/" + talkDate.event.id} className="card-link">{talkDate.event.name}</Link>
                            )}
                        </dd>
                    </dl>
                </div>
            </div>
        );
    }
}

export default withRouter(TalkDetails);