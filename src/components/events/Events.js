import React from 'react';
import axios from "axios"
import rest from "../../utils/rest";
import EventCard from "./EventCard";

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        };
    }

    componentDidMount() {
        rest.doGet(`${process.env.REACT_APP_HOST}/events`)
            .then((response) => {
                const events = response.data.slice();

                const promises = [];
                events.forEach(event => {
                    promises.push(rest.doGet(`${process.env.REACT_APP_HOST}/topics/event/${event.id}`));
                });

                axios.all(promises)
                    .then(axios.spread((...responses) => {
                            // Attach the topics to the events
                            responses.forEach((response, i) => {
                                // Eliminate duplicate topics as well
                                events[i].topics = response.data.filter((v, i, a) => a.findIndex(t => (t.name === v.name)) === i)
                            });

                            this.setState({
                                events: events,
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
        const eventCards = this.state.events.map((event) =>
            <EventCard key={event.id} event={event}/>
        );

        return (
            <div className="container">
                <div className="row mt-5">
                    {eventCards}
                </div>
            </div>
        );
    }
}

export default Events;