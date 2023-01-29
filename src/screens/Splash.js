import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { AsyncStorage } from "@react-native-async-storage/async-storage";
import styled, { ThemeProvider } from 'styled-components/native';

const container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ash;
`;
const activityIndicator = styled.style`
    align-items: center;
    height: 80;
`;

const Splash = ({navigation}) => {
    const [ animating, setAnimating ] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAnimating(false);
            AsyncStorage.getItem('user_id').then((value) => 
             navigation.replace(value === null ? 'Auth' : 'DrawerNavigationRoutes'),
             );        
            }, 3000);
        }, []);
        return (
            <container>
                <Image
                source={require('../assets/icon.png')}
                style={{width: wp(55), resizeMode: 'contain', margin: 30}}
                />
                <ActivityIndicator
                animating={animating}
                color="mandarino"
                size="large"
                style={styled.activityIndicator}
                />
            </container>
        );
    };

    export default Splash;
