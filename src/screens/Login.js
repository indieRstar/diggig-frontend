import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled, {ThemeProvider} from 'styled-components/native';
import { TouchableOpactiy, Text, Image, TextInput } from 'react-native';
import 'react-native-gesture-handler';

const container = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: ash;
    padding-left: wp(7);
    padding-right: wp(7);
`;
const topArea = styled.View`
    flex: 1;
    padding-top: wp(2);
`;
const titleArea = styled.View`
    flex: 0.7;
    justify-content: center;
    padding-top: wp(3);
`;
const TextArea = styled.View`
    flex: 0.3;
    justify-content: center;
    background-color: ash;
`;
const text = styled.Text`
    font-size: wp('4%');
`;
const TextValidation = styled.Text`
    font-size: wp('4%');
    color: red;
    padding-top: wp(2);
`;
const formArea = styled.View`
    justify-content: center;
    flex: 1.5;
`
const TextFormTop = styled.TextInput`
    border-width: 2;
    border-bottom-width: 1;
    border-color: black;
    border-top-left-radius: 7;
    border-top-right-radius: 7;
    width: 100%;
    height: hp(6);
    padding-left: 10;
    padding-right: 10;
`;
const TextFormBottom = styled.TextInput`
    border-width: 2;
    border-top-width: 1;
    border-color: black;
    border-bottom-right-radius: 7;
    border-bottom-left-radius: 7;
    width: 100%;
    height: hp(6);
    padding-left: 10;
    padding-right: 10;
`;
const btnArea = styled.View`
    height: hp(8);
    justify-content: center;
    align-items: center;
    padding-bottom: hp(1.5);
`;
const btn = styled.TouchableOpactiy`
    flex: 1;
    width: 100%;
    border-radius: 7;
    justify-content: center;
    align-items: center;
    background-color: mandarino;
`;

const [userId, setUserId] = useState('');
const [userPassword, setUserPassword] = useState('');
const [loading, setLoading] = useState(false);
const [errortext, setErrortext] = useState('');

function LogoutScreen({navigation: {navigate}}) {
    return (
        <container>
            <topArea>
                <titleArea>
                    <Image
                    source={require('../assets/')}
                    style={{width: wp(30), resizeMode: 'contain'}}
                    />
                </titleArea>
                <TextArea>
                    <Text></Text>
                </TextArea>
            </topArea>

            <formArea>
                <TextFormTop placeholder={'ID'} 
                onChangeText={(userId) => setUserId(userId)} 
                autoCapitalize="none" 
                returnKeyType="next" 
                onSubmitEditing={() =>
                    passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#6000"
                blurOnSubmit={false}
                />
                <TextFormBottom placeholder={'password'}/>
                <TextValidation>Wrong ID</TextValidation>
            </formArea>
            <View style={{ flex:0.75 }}>
                <btnArea>
                    <btn>
                        <text style={{color:ash}}>로그인</text>
                    </btn>
                </btnArea>
            </View>
            <View style={{flex:3}}/>
        </container>
    )
}

fetch('http://localhost:3001/api/user/login', {
    method='POST',
    body=formBody,
    
})

export default LogoutScreen;


