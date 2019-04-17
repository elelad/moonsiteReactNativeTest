import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { Header, Body, Title, Left, Button, Text, Right, Icon } from 'native-base';
import C from '../Services/constants';

const MyHeader = ({ title, back, navigation  }) => (
    <Header style={styles.box} androidStatusBarColor={C.pageBackgroundColor}>
        <Left>
            {back && <Button dark transparent onPress={() => navigation.pop()}>
                <Icon name='ios-arrow-back'></Icon>
            </Button>}
        </Left>
        <Body>
            <Title style={styles.text}>{title}</Title>
        </Body>
        <Right />
    </Header>
)

const styles = StyleSheet.create({
    box: {
        backgroundColor: C.headerColor,
    },
    text: {
        color: C.pageBackgroundColor
    }
})

export default MyHeader;