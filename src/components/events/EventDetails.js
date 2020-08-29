import React from 'react';
import {useParams, withRouter} from "react-router-dom";
import rest from "../../utils/rest";

const EventDetails = () => {
    const [event, setEvent] = React.useState({
        id: "",
        organization: {},
        talks: [],
    });
    const [error, setError] = React.useState("");

    const getDaysBetween = (start, end) => {
        const arr = [];
        for (let dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
            arr.push(new Date(dt));
        }

        return arr;
    };

    const createDayToTalksMap = (days, talkDates) => {
        const map = {};
        days.forEach(day => {
            map[day] = talkDates.filter(talkDate => sameDay(day, new Date(talkDate.beginDate)))
        });

        return map;
    }

    const sameDay = (date1, date2) => {
        return date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate();
    }

    const param = useParams();

    React.useEffect(() => {

        async function fetchData() {
            try {
                const event = await rest.doGet(`${process.env.REACT_APP_HOST}/events/${param.id}`);
                const talkDates = await rest.doGet(`${process.env.REACT_APP_HOST}/talkDates/event/${param.id}`);

                console.log(event.data);
                console.log(talkDates.data);

                const eventDays = getDaysBetween(event.data.beginDate, event.data.endDate);
                console.log(eventDays);

                const dayToTalksMap = createDayToTalksMap(eventDays, talkDates.data);
                console.log(dayToTalksMap);

                setEvent(event.data);
            } catch (e) {
                setError(e.message);
            }
        }

        fetchData();
    }, [param, error]);

    return (
        <div className="container">
            <div className="row mt-5">
                <h2>EventDetails id: {event.id}</h2>
            </div>
        </div>
    );
}

export default withRouter(EventDetails);