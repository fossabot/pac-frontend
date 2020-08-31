import React from "react";
import {Table} from "react-bootstrap";
import {formatTime} from "../../utils/dateUtils";
import {Link} from "react-router-dom";

const EventDetailsDayOverview = (props) => {

    return (
        <Table responsive>
            <thead>
            <tr>
                <th>Time</th>
                <th>Title</th>
                <th>Topics</th>
                <th>Persons</th>
                <th>Level</th>
                <th>Room</th>
            </tr>
            </thead>
            <tbody>
            {props.talkDates.map((talkDate) => (
                <tr key={talkDate.id}>
                    <td>
                        {formatTime(talkDate.beginDate)}
                    </td>
                    <td>
                        <Link to={"/talkDetails/" + talkDate.talk.id} key={talkDate.talk.id}
                              className="card-link">{talkDate.talk.title}</Link>
                    </td>
                    <td>
                        {talkDate.talk.topics.map((topic) =>
                            <span key={topic.id} className="badge badge-info mx-1">{topic.name}</span>
                        )}
                    </td>
                    <td>
                        {talkDate.talk.persons.map((person) =>
                            <Link key={person.id} to={"/speakerDetails/" + person.id} className="card-link">{person.name}</Link>
                        )}
                    </td>
                    <td>
                        {talkDate.talk.level}
                    </td>
                    <td>
                        {talkDate.room.name}
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    )
}

export default EventDetailsDayOverview;