import React, { useContext } from "react";
import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup } from '../screens';

const Stack = createStackNavigator();

const AuthStack = () => {
    const theme = useContext(ThemeContext);
    return (
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerTitleAlign: 'right',
            cardStyle: { backgroundColor: theme.backgroundColor },
          }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.screen name="Signup" component={Signup} />
        </Stack.Navigator>
    );
};

export default AuthStack;