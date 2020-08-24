import React from "react";
import {Link} from "react-router-dom";

function SpeakerCard(props) {
    const {
        id,
        name,
        talks,
    } = props.speaker;

    return (
        <div className="col-10 col-lg-4 mx-auto mb-5">
            <div className="card" style={{width: '20rem'}}>
                <img src={process.env.PUBLIC_URL + "/images/speaker.jpg"}
                     className="card-img img-thumbnail border-0 float-left" alt={name}/>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className="text-center">
                        <Link to={"/speakerDetails/" + id} className="btn btn-outline-primary text-uppercase">
                            View Profile
                        </Link>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="card-text">
                        <h6 className="card-title">Talks:</h6>
                        {talks.map((talk) =>
                            <Link to={"/talkDetails/" + talk.id} key={talk.id} className="card-link">{talk.title}</Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpeakerCard;