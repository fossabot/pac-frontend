import React from 'react';
import {Link, withRouter, useParams} from "react-router-dom";
import rest from "../../utils/rest";

const SpeakerDetails = (props) => {
    const [speaker, setSpeaker] = React.useState({
        id: "",
        organization: {},
        talks: [],
    });
    const [error, setError] = React.useState("");

    const param = useParams();

    React.useEffect(() => {

        async function fetchData() {
            try {
                const speaker = await rest.doGet(`${process.env.REACT_APP_HOST}/persons/${param.id}`);
                const talks = await rest.doGet(`${process.env.REACT_APP_HOST}/talks/person/${param.id}`);

                Object.assign(speaker.data, {talks: talks.data});

                setSpeaker(speaker.data);
            } catch (e) {
                setError(e.message);
            }
        }

        fetchData();
    }, [param, error]);

    return (
        <div className="container">
            <div className="row mt-5">
                <dl className="row">
                    <dt className="col-sm-3">Speaker</dt>
                    <dd className="col-sm-9">{speaker.name}</dd>

                    <dt className="col-sm-3">Talks</dt>
                    <dd className="col-sm-9">
                        {speaker.talks.map((talk) =>
                            <Link to={"/talkDetails/" + talk.id} key={talk.id} className="card-link">{talk.title}</Link>
                        )}
                    </dd>
                </dl>
            </div>
        </div>
    );
}

export default withRouter(SpeakerDetails);