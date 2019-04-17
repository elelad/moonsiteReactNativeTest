import React, { Component } from "react";
import { Header, Body, Title, Left, Button, Text, Right, Icon } from 'native-base';

class MyHeader extends Component {


    render() {
        return (
            <Header>
                <Left>
                    {this.props.back && <Button dark transparent onPress={() => this.props.navigation.pop()}>
                        <Icon name='ios-arrow-back'></Icon>
                    </Button>}
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right />
            </Header>
        )
    }
}


export default MyHeader;