import React from 'react';
import {useParams, withRouter} from "react-router-dom";
import rest from "../../utils/rest";
import { Tabs, Tab } from 'react-bootstrap';
import {formatDate} from "../../utils/dateUtils";
import EventDetailsDayOverview from "./EventDetailsDayOverview";

const EventDetails = () => {
    const [tabKey, setTabKey] = React.useState('');
    const [event, setEvent] = React.useState({
        id: "",
        organization: {},
        talks: [],
        eventDays: [],
        dayToTalkDatesMap: {},
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

                const eventDays = getDaysBetween(event.data.beginDate, event.data.endDate);
                const dayToTalkDatesMap = createDayToTalksMap(eventDays, talkDates.data);

                setEvent({...event.data, dayToTalkDatesMap, eventDays});
            } catch (e) {
                setError(e.message);
            }
        }

        fetchData();
    }, [param, error]);

    const {
        name,
        eventDays,
        dayToTalkDatesMap,
    } = event;

    return (
        <div className="container">
            <div className="row mt-5">
                <h2>{name}</h2>
            </div>
            <Tabs
                id="event-talks-tabs"
                transition={false}
                activeKey={tabKey ? tabKey : formatDate(eventDays[0])}
                onSelect={(k) => setTabKey(k)}
            >
                {eventDays.map((eventDay) =>
                    <Tab key={formatDate(eventDay)} eventKey={formatDate(eventDay)} title={formatDate(eventDay)}>
                        <EventDetailsDayOverview talkDates={dayToTalkDatesMap[eventDay]} />
                    </Tab>
                )}
            </Tabs>
        </div>
    );
}

export default withRouter(EventDetails);