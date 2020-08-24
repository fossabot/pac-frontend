import React from 'react';
import rest from "../../utils/rest";
import SpeakerCard from "./SpeakerCard";

const Speakers = () => {
    const [speakers, setSpeakers] = React.useState([]);
    const [error, setError] = React.useState("");

    React.useEffect(() => {
        async function fetchData() {
            try {
                const speakers = await rest.doGet(`${process.env.REACT_APP_HOST}/persons`);

                const promises = speakers.data.map(async speaker => {
                    const ret = await rest.doGet(`${process.env.REACT_APP_HOST}/talks/person/${speaker.id}`);
                    return ret.data;
                });

                const talks = await Promise.all(promises);
                speakers.data.map((speaker, i) => {
                    return Object.assign(speaker, {talks: talks[i]});
                });

                setSpeakers(speakers.data);
            } catch (e) {
                setError(e.message);
            }
        }

        fetchData();
    }, [speakers, error]);

    return (
        <div className="container">
            <div className="row mt-5">
                {error && <h1>{error}</h1>}
                {speakers.map((speaker) =>
                    <SpeakerCard key={speaker.id} speaker={speaker}/>
                )}
            </div>
        </div>
    );
}

export default Speakers;