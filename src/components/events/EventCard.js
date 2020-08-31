import React from "react";
import {Link} from "react-router-dom";
import {formatDate} from "../../utils/dateUtils";

const EventCard = (props) => {
    const {
        id,
        name,
        beginDate,
        endDate,
        location,
        topics,
    } = props.event;

    return (
        <div className="col-10 col-lg-4 mx-auto mb-5">
            <div className="card" style={{width: '20rem'}}>
                <img src={process.env.PUBLIC_URL + "/images/conference" + id + ".jpg"} alt={name} className="card-img-top"/>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <h5 className="card-title">Location: {location.name}</h5>
                    <h5 className="card-title">Start: {formatDate(beginDate)}</h5>
                    <h5 className="card-title">End: {formatDate(endDate)}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <h6 className="card-title">Topics:</h6>
                    <p className="card-text">
                        {topics.map((topic) =>
                            <span key={topic.id} className="badge badge-info mx-1">{topic.name}</span>
                        )}
                    </p>
                    <Link to={"/eventDetails/" + id} className="btn btn-outline-primary text-uppercase">
                        More Info
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EventCard;