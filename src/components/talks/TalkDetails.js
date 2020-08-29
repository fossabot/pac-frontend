import React from 'react';
import {Link, useParams, withRouter} from "react-router-dom";
import rest from "../../utils/rest";

const TalkDetails = () => {
    const [talk, setTalk] = React.useState({
        title: "",
        language: "",
        level: "",
        persons: [],
        topics: [],
        talkDates: [],
    });
    const [error, setError] = React.useState("");

    const param = useParams();

    React.useEffect(() => {

        async function fetchData() {
            try {
                const talk = await rest.doGet(`${process.env.REACT_APP_HOST}/talks/${param.id}`);

                setTalk(talk.data);
            } catch (e) {
                setError(e.message);
            }
        }

        fetchData();
    }, [param, error]);

    const {
        title,
        language,
        level,
        persons,
        topics,
        talkDates,
    } = talk;

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

export default withRouter(TalkDetails);