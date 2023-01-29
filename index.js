/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './src/App';
import {name as appName} from './app.json';

const client = new ApolloClient({
    uri: 'localhost:4000/graphql',
    cache: new InMemoryCache()
});

const App = () => (
    <ApolloProvider client={client}>
        <MyRootComponent />
    </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => App);
