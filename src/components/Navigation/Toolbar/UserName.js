import React from 'react';
import {useReactOidc} from '@axa-fr/react-oidc-context';

const UserName = () => {
    const {oidcUser} = useReactOidc();
    const {profile} = oidcUser;
    return (
        <div>
            <span>
                {console.log(oidcUser)}
                {console.log(profile)}
                Hello {profile.given_name} {profile.family_name} {profile.unique_name}
            </span>
        </div>
    );
};

export default UserName;
