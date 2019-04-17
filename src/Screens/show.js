import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import { Text, Content, Container, Card,Icon, CardItem } from 'native-base';
import MyHeader from '../Components/header';
import CardShow from '../Components/showCard';

class Show extends Component {
    constructor(props){
        super(props);
        this.show = this.props.navigation.getParam('show');
        
    }

    render() {
        return (
            <Container style={styles.box}>
                <MyHeader title={this.show.name} back navigation={this.props.navigation}></MyHeader>
                <Content>
                <CardShow show={this.show}></CardShow>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'black'
    },
    imageBox: {
        justifyContent: 'center',
        backgroundColor: 'black'
        
    },
    image: {
        height: 295, width: 220, alignSelf: 'center'
    }
})


export default Show;