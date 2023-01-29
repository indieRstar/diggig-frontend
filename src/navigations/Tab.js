import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Recommendation, Search, Interview } from '../screens/TabScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
            name="Recommendation" 
            component={Recommendation} 
            options={{ tabBarIcon: props => TabIcon({ ...props, name: 'Recommendation' }),}}/>
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Interview" component={Interview} />
        </Tab.Navigator>
    );
};

export default TabNavigation;