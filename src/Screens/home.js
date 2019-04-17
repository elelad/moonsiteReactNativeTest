import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Content, Container, Spinner, Header, Item, Icon, Input, Left, Right, Body, Title } from 'native-base';
import MyHeader from '../Components/header';
//import MyFooter from '../Components/footer';
import ShowItem from '../Components/showItem';
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
const data = require('../Services/data.json');
import { getData } from '../Services/dataHndler';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            showSerch: false,
            text: 'Game of',
            error: false
        }
        getData(this.state.text).then((data) => {
            console.log(data);
            this.setState({ data: data, loading: false })
        });

    }

    _renderItem = ({ item }) => {
        //let imageUrl = 'https://via.placeholder.com/220X295';
        //if (item.show.image) imageUrl = item.show.image.medium
        //let imageUrl = item.show.image.medium || 'https://via.placeholder.com/220X295';
        //if (!imageUrl) imageUrl = 'https://via.placeholder.com/220X295';
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Show', { show: item.show })}>
                <ShowItem name={item.show.name} imageUrl={item.show.image.medium} rating={item.show.rating.average}></ShowItem>
            </TouchableOpacity>
        )
    }

    _keyExtractor(item) {
        return item.show.id.toString()
    }

    setText = (text) => {
        this.text = text;
    }

    search = () => {
        this.setState({ loading: true });
        getData(this.state.text).then((data) => {
            //console.log(data);
            if (data.length === 0) {
                this.setState({ error: true, loading: false })
            } else {
                this.setState({ data: data, loading: false, error: false })
            }

        }).catch((e) => {
            console.log(e);
            this.setState({ error: true, loading: false })
        });
    }


    render() {
        return (
            <Container style={styles.box}>
                {/* <MyHeader title={'TV Shows'}></MyHeader> */}
                {!this.state.showSerch &&
                    <Header searchBar={this.state.showSerch} rounded={this.state.showSerch}>
                        <Left />
                        <Body>
                            <Title>TV Shows</Title>
                        </Body>
                        <Right>
                            <Button dark transparent onPress={() => this.setState({ showSerch: true })}>
                                <Icon name="ios-search" />
                            </Button>
                        </Right>
                    </Header>}
                {this.state.showSerch &&
                    <Header searchBar rounded>
                        <Button dark transparent onPress={() => this.setState({ showSerch: false })}>
                            <Icon name="ios-arrow-back" />
                        </Button>
                        <Item>
                            <Icon name="ios-search" />
                            <Input onChangeText={(text) => this.setState({ text })} value={this.state.text} />
                        </Item>
                        <Button dark transparent onPress={() => this.search()}>
                            <Icon name="ios-thumbs-up" />
                        </Button>
                    </Header >
                }

                <Content>
                    {this.state.error && <View><Text style={styles.error}>No data</Text></View>}
                    {this.state.loading && !this.state.error && <View><Spinner color='white' /></View>}
                    {!this.state.loading && !this.state.error && <FlatList
                        data={this.state.data}
                        extraData={this.state}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                    />}
                </Content>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    box: {
        backgroundColor: '#424242'
    },
    error: {
        alignSelf: 'center',
        color: 'white',
        marginTop: 30,
        fontSize: 12
    }
})

export default Home;