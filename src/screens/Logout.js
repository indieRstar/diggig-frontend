import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { View, SafeAreaView, Image, TouchableOpacity, Text } from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native';

const container = styled.View`
    flex: 1.5;
    flex-direction: column;
    background-color: 'ash';
    `;
const logoArea = styled.View`
    flex: 0.5;
    justify-content: center;
    align-items: center;
    background-color: ash;
    `;
const btnArea = styled.View`
    flex: 1;
    background-color: mandarino;
    `;
const btn = styled.TouchableOpacity`
    flex: 1;
    width: wp(75);
    borderRadius: 5;
    justify-content: center;
    align-items: center;
    background-color: mandarino;
    `;
const btnoutline = styled.TouchableOpacity`
    flex: 1;
    width: wp(75);
    border-radius: 5;
    justify-content: center;
    align-items: center;
    background-color: ash;
    border-width: 1;
    `;

const Logout: () => React$Node = () => {
    return (
        <container>
            <View style={{flex: 1.5}} />
            <View style={{flex: 2}}>
                <logoArea>
                    <Image
                    source={require('../assets/icon.png')}
                    style={{width: wp(55), resizeMode: 'contain'}}
                    />
                </logoArea>
                <btnArea>
                    <btnoutline onPress={()=>navigation.navigate('Login')
                    }>
                        <Text>Login</Text>
                    </btnoutline>
                </btnArea>
                <btnArea>
                <btn>
                    <Text>Register</Text>
                </btn>
                </btnArea>
            </View>
            <View style={{flex: 1}} />
        </container>
    );
};

export default Logout;
