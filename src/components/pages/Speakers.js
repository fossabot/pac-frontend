import React from 'react';
import SpeakerCard from "../SpeakerCard";

import {speakers as testSpeakers} from "../../testdata/data";


class Speakers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            speakers: [],
        };
    }

    componentDidMount() {
        // TODO call API here
        const speakers = testSpeakers.slice();
        speakers.forEach(speaker => {
            speaker.talks = [{ id: 1, name: "HEHEHE"}, { id: 2, name: "Jhahahahaava"}];
        })
        this.setState({
            speakers: speakers,
        });
    }

    render() {
        const speakerCards = this.state.speakers.map((speaker) =>
            <SpeakerCard key={speaker.id} speaker={speaker}/>
        );

        return (
            <div className="container">
                <div className="row mt-5">
                    {speakerCards}
                </div>
            </div>
        );
    }
}

export default Speakers;