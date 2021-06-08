import './App.css';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import React, {Component} from "react";
import {AuthProvider} from 'oidc-react';

// import OidcSettings from './oidcsettings';
const oidcConfig = {
    onSignIn: async (user: any) => {
        alert('You just signed in, congratz! Check out the console!');
        console.log(user);
        window.location.hash = '';
    },
    // metadata: {
    //     issuer: 'https://logon.securexacc.eu/adfs',
    //     authorization_endpoint: 'https://logon.securexacc.eu/adfs/oauth2/authorize',
    //     // userinfo_endpoint: 'https://logon.securexacc.eu/adfs/userinfo',
    //     // end_session_endpoint: 'https://logon.securexacc.eu/adfs/oauth2/logout',
    //     jwks_uri: 'http://localhost:3000/.well-known/keys.json',
    // },
    // authority: 'http://localhost:3000/.well-known/openid-configuration.json',
    authority: 'https://logon.securexacc.eu/adfs',
    clientId: 'b023c7bb-7195-4341-b456-abfca5aee910',
    redirect_uri: 'http://localhost:3000/',
    redirectUri:
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/'
            : 'prd',
    response_type: 'id_token token',
    // response_type: 'code',
    scope: 'openid profile roles',
    post_logout_redirect_uri: 'https://localhost:3000/',
    loadUserInfo: false,
    automaticSilentRenew: true,
    // signingKeys: [{
    //     "kty": "RSA",
    //     "use": "sig",
    //     "alg": "RS256",
    //     "kid": "F6V92znoKUsHQvqODys1xdoBgIM",
    //     "x5t": "F6V92znoKUsHQvqODys1xdoBgIM",
    //     "n": "ujGq0bksKj9a-torhYuusgEQ0_X_SvnUtGSVwnyuOevbnrsiZBNEJZdNxOyj7Z8CwKEmSJTzmJRqKE4zj-0cAb4otM6Bk4maRJpfxL9frmjg7ZnWSrfhMQdcXbfzyTF0izKDGOwDctrMgZqAusq4WeQBzTxXXg6yMhHed7BtpHDP8_EffHisAzfbwJqdDh0HLNvC712weXvW9whUTLDx2hiacxtiMiz_DP8wOHpVYaWHWxmBMHa1hiI9p1BHNjP4gqxM03Zm2FSATDxUPhAtHXdWP_olsD_0eziyFgHHC_PDftpOSBPuL9djIr9HbdthvV3sYeQ1YdjhNBoqkUKq5Q",
    //     "e": "AQAB",
    //     "x5c": ["\"MIIC4jCCAcqgAwIBAgIQbzln5A/wrZ5KU/6PE3p6zjANBgkqhkiG9w0BAQsFADAtMSswKQYDVQQDEyJBREZTIFNpZ25pbmcgLSBsb2dvbi5zZWN1cmV4YWNjLmV1MB4XDTE5MTExNTEwMjgwOVoXDTIxMTExNDEwMjgwOVowLTErMCkGA1UEAxMiQURGUyBTaWduaW5nIC0gbG9nb24uc2VjdXJleGFjYy5ldTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALoxqtG5LCo/WvraK4WLrrIBENP1/0r51LRklcJ8rjnr2567ImQTRCWXTcTso+2fAsChJkiU85iUaihOM4/tHAG+KLTOgZOJmkSaX8S/X65o4O2Z1kq34TEHXF2388kxdIsygxjsA3LazIGagLrKuFnkAc08V14OsjIR3newbaRwz/PxH3x4rAM328CanQ4dByzbwu9dsHl71vcIVEyw8doYmnMbYjIs/wz/MDh6VWGlh1sZgTB2tYYiPadQRzYz+IKsTNN2ZthUgEw8VD4QLR13Vj/6JbA/9Hs4shYBxwvzw37aTkgT7i/XYyK/R23bYb1d7GHkNWHY4TQaKpFCquUCAwEAATANBgkqhkiG9w0BAQsFAAOCAQEAMaJA1yksI9xdQ1TnAadCmOsiYxI5uNOAon4BcmffKap08n+YZvxMYoGPgDw5KUUalbkOCqmZF3yGypLYMiiGugNPdaCLZqHVGeGri2XCZSNQFgPNdk/qaDzrM+HYFMopAhk+hyhqYvU0eMz4GN6nNOqicQi4iKe+yPwxagyQPaSn9ZqNiSvDloTzs1Mr8l8zzeZxvEZOf2VHs5wJzsxDZe2tAhRsRNjKeq9JRf22htT17WyVR/3GyA2CSpx/w26Ky5YyFuwGVVuZaGGc7Gq9sFSWNrF1j1ytjE8t0F1NeUeWsftHnaslot5UT0tDU6myLQ/KS66/RcXJk3h3UePvdA=="]
    // }]
};

class App extends Component {
    render() {
        return (
            <AuthProvider {...oidcConfig}>
                <div>
                    <Layout>
                        <BurgerBuilder/>
                    </Layout>
                </div>
            </AuthProvider>
        )
    }
}

export default App;
