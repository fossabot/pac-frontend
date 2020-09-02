import React from 'react'
import {Route} from 'react-router-dom'
import Keycloak from "./Keycloak";

export default ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                <Keycloak>
                    <Component {...props} />
                </Keycloak>
            }
        />
    )
}
