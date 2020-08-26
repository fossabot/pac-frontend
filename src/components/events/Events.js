import React from 'react';
import rest from "../../utils/rest";
import EventCard from "./EventCard";

const Events = () => {
    const [events, setEvents] = React.useState([]);
    const [error, setError] = React.useState("");

    const filterDuplicates = (topics) => {
        return topics.filter((v, i, a) => a.findIndex(t => (t.name === v.name)) === i)
    }

    React.useEffect(() => {
        async function fetchData() {
            try {
                const events = await rest.doGet(`${process.env.REACT_APP_HOST}/events`);

                const promises = events.data.map(async event => {
                    const ret = await rest.doGet(`${process.env.REACT_APP_HOST}/topics/event/${event.id}`);
                    return ret.data;
                });

                const topics = await Promise.all(promises);
                events.data.map((event, i) => {
                    // Eliminate duplicate topics as well
                    return Object.assign(event, {topics: filterDuplicates(topics[i])});
                });

                setEvents(events.data);
            } catch (e) {
                setError(e.message);
            }
        }

        fetchData();
    }, [error]);

    return (
        <div className="container">
            <div className="row mt-5">
                {error && <h1>{error}</h1>}
                {events.map((event) =>
                    <EventCard key={event.id} event={event}/>
                )}
            </div>
        </div>
    );
}

export default Events;