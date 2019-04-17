import React, { Component } from "react";
import { StyleSheet, BackHandler } from "react-native";
import { Content, Container } from 'native-base';
import MyHeader from '../Components/header';
import CardShow from '../Components/showCard';
import C from '../Services/constants';

class Show extends Component {
    constructor(props) {
        super(props);
        this.show = this.props.navigation.getParam('show');

    }

    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.pop();
            return true;
        })
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
        backgroundColor: C.pageBackgroundColor
    },
    imageBox: {
        justifyContent: 'center',
        backgroundColor: C.pageBackgroundColor

    },
    image: {
        height: 295, width: 220, alignSelf: 'center'
    }
})


export default Show;