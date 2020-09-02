import React from "react";
import {useKeycloak} from "@react-keycloak/web";
import {useEffect} from "react";

export default () => {
    const [keycloak] = useKeycloak();

    useEffect(() => {
        keycloak.login();
    }, [keycloak])

    return <div></div>;
}