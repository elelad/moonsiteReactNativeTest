import React from "react";
import {StyleSheet, Linking} from 'react-native';
import { Footer, Body, Text, Left, Right } from 'native-base';
import C from '../Services/constants';


const MyFooter = () => (
    <Footer style={styles.box}>
        <Left />
        <Body>
            <Text onPress={()=>link()} style={styles.text}>Elad Elram</Text>
        </Body>
        <Right />
    </Footer>)

function link(){
    Linking.openURL('https://elelad.github.io/eleladev/').catch((e) => console.error('An error occurred', e));
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: C.footerColor,
        height: 40,
    },
    text: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 10,
        color: C.pageBackgroundColor
    }
})


export default MyFooter;