import React from 'react'
import {Route} from 'react-router-dom'
import Redirect from "../Redirect";
import {useKeycloak} from '@react-keycloak/web'

export default ({component: Component, ...rest}) => {
    const [keycloak] = useKeycloak();

    return (
        <Route
            {...rest}
            render={(props) =>
                keycloak.authenticated ? (
                    <Component {...props} />
                ) : (
                    <Route
                        path={rest.path}
                        component={Redirect}
                    />
                )
            }
        />
    )
}
