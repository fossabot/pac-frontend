import React from 'react';
import SpeakerCard from "../SpeakerCard";
import Rest from "../../rest";
import axios from "axios";


class Speakers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            speakers: [],
        };
    }

    componentDidMount() {
        const rest = new Rest();
        rest.doGet("http://localhost:9090/persons")
            .then((response) => {
                const speakers = response.data;

                const promises = [];
                speakers.forEach(speaker => {
                    promises.push(rest.doGet("http://localhost:9090/talks/person/" + speaker.id));
                });

                axios.all(promises)
                    .then(axios.spread((...responses) => {
                            // Attach the talks to the speakers
                            responses.forEach((response, i) => {
                                // Eliminate duplicate topics as well
                                speakers[i].talks = response.data;
                            });

                            this.setState({
                                speakers: speakers,
                            });
                        })
                    ).catch(errors => {
                    console.error(errors);
                });
            }, (error) => {
                console.log(error);
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