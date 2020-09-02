import Keycloak from 'keycloak-js'

const keycloakConfig = {
    url: `${process.env.REACT_APP_KEYCLOAK_URL}`,
    realm: `${process.env.REACT_APP_KEYECLOAK_REALM}`,
    clientId: `${process.env.REACT_APP_KEYECLOAK_ClIENT_ID}`,
    onLoad: "login-required",
};

export const keycloak = new Keycloak(keycloakConfig);

export const keycloakProviderInitConfig = {
    onLoad: 'check-sso',
}
