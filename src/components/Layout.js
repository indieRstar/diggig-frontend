import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const Header = () => {
 return (
    <View style={[styles.container, styles.header]}>
        <Text style={styles.text}>Header</Text>
    </View>
 );
};

export const Footer = () => {
 return (

 );
};

export const Contents = () => {
 return (

 );
};

const styles = StyleSheet.create({
    container: {
        
    },
    header: {
        backgroundColor: '#FFC300',

    },
    footer: {
        backgroundColor: '#FFC300',
    },
    contents: {
        flex: 1,
        backgroundColor: '#EAE8E8',
    },
});