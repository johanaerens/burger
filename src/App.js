import './App.css';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import {AuthenticationProvider, oidcLog, OidcSecure} from '@axa-fr/react-oidc-context';
import oidcConfiguration from './configuration';

function App() {
    return (
        <AuthenticationProvider configuration={oidcConfiguration} loggerLevel={oidcLog.DEBUG}>
            <OidcSecure>
                <div>
                    <Layout>
                        <BurgerBuilder/>
                    </Layout>
                </div>
            </OidcSecure>
        </AuthenticationProvider>
    );
}

export default App;
