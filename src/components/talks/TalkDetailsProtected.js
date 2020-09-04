import Keycloak from "../Keycloak";
import React from "react";
import TalkDetails from "./TalkDetails";

const TalkDetailsProtected = () => {

    if (`${process.env.REACT_APP_ENABLE_KEYCLOAK}` && window.Keycloak !== undefined) {
        return (
            <Keycloak>
                <TalkDetails/>
            </Keycloak>
        )
    } else {
        return <TalkDetails/>
    }
}

export default TalkDetailsProtected;