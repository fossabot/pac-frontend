import React from 'react';
import EventCard from "../EventCard";

import {events as testEvents} from "../../testdata/data"

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          events: [],
        };
    }

    componentDidMount() {
        // TODO call API here
        const events = testEvents.slice();
        events.forEach(event => {
            event.topics = ["Java", "JavaScript", "Kubernetes"];
        })

        this.setState({
            events: events,
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