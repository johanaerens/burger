import { withAuth } from 'oidc-react';
import {Component} from "react";

class Hello extends Component {
    render() {
            return (
                <p>Hello {this.props.authData.profile.name}!</p>
            );
    }
}


export default withAuth(Hello);