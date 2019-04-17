import React from "react";
import {StyleSheet} from 'react-native';
import { Footer, Body, Text, Left, Right } from 'native-base';


const MyFooter = () => (
    <Footer style={styles.box}>
        <Left />
        <Body>
            <Text style={styles.text}>Elad Elram</Text>
        </Body>
        <Right />
    </Footer>)


const styles = StyleSheet.create({
    box: {
        backgroundColor: '#424242',
        height: 20,
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 10,
        color: 'white'
    }
})


export default MyFooter;