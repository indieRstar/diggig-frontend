import React from "react";
import { SafeAreaView, StatusBar } from 'react-native';
import Logout from './screens/Logout';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
const Stack = createStackNavigator();

function BackBtn() {
    return (
        <Image
        source={require('./assets/')}
        style={{marginLeft: 10, width: 22, height: 22}}
        />
    );
};

const Auth = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Logout"
                screens={Logout}
                options={{headerShown: false}}
                />
                <Stack.Screen
                name="Login"
                screens={Login}
                options={{
                    title: '',
                    headerBackTitleVisible: false,
                    headerBackImage: BackBtn,
                }}
                />
                <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    title: '',
                    headerBackTitleVisible: false,
                    headerBackImage: BackBtn,
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const App: () => React$Node = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen
                name="Splash"
                component={{Splash}}
                options={{headerShown:false}}
                />
                <Stack.Screen
                name="Auth"
                component={Auth}
                options={{headerShown:false}}
                />
                <Stack.Screen
                name="DrawerNavigationRoutes"
                component={DrawerNavigationRoutes}
                options={{headerShown:false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )

};

export default App;