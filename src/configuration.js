const configuration = {
    client_id: 'b023c7bb-7195-4341-b456-abfca5aee910',
    redirect_uri: 'http://localhost:3000/authentication/callback',
    response_type: 'code',
    post_logout_redirect_uri: 'http://localhost:3000/',
    scope: 'openid profile email',
    authority: 'https://logon.securexacc.eu/adfs',
    silent_redirect_uri: 'http://localhost:3000/authentication/silent_callback',
    automaticSilentRenew: true,
    loadUserInfo: false,
};

export default configuration;
