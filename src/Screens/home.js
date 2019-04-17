import React, { Component } from "react";
import { View, StyleSheet, BackHandler } from "react-native";
import { Button, Text, Content, Container, Spinner, Header, Item, Icon, Input, Left, Right, Body, Title } from 'native-base';
import ShowItem from '../Components/showItem';
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
//const data = require('../Services/mockData.json');
import DataHandler from '../Services/dataHndler';
import C from '../Services/constants';

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
        DataHandler.getData(this.state.text).then((data) => {//populate shows from the api
            console.log(data);
            this.setState({ data: data, loading: false })
        });

    }

    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            if (this.state.showSerch) {
                this.setState({ showSerch: false });
                return true;
            }
        })
    }

    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Show', { show: item.show })}>
                <ShowItem name={item.show.name} imageUrl={item.show.image.medium} rating={item.show.rating.average}></ShowItem>
            </TouchableOpacity>
        )
    }

    _keyExtractor(item) {
        return item.show.id.toString();
    }

    search = () => {
        this.setState({ loading: true });
        DataHandler.getData(this.state.text).then((data) => {
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
                {!this.state.showSerch &&
                    <Header style={styles.header} androidStatusBarColor={C.pageBackgroundColor}>
                        <Left />
                        <Body>
                            <Title style={styles.title}>TV Shows</Title>
                        </Body>
                        <Right>
                            <Button dark transparent onPress={() => this.setState({ showSerch: true })}>
                                <Icon name="ios-search" />
                            </Button>
                        </Right>
                    </Header>}
                {this.state.showSerch &&
                    <Header style={styles.header} searchBar rounded androidStatusBarColor={C.pageBackgroundColor}>
                        <Button dark transparent onPress={() => this.setState({ showSerch: false })}>
                            <Icon name="ios-arrow-back" />
                        </Button>
                        <Item style={{ flex: 1 }}>
                            <Icon name="ios-search" />
                            <Input onChangeText={(text) => this.setState({ text })} value={this.state.text} />
                            <Button style={{ alignSelf: 'center' }} transparent onPress={() => this.search()}>
                                <Icon name="ios-thumbs-up" />
                            </Button>
                        </Item>
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
        backgroundColor: C.pageBackgroundColor
    },
    error: {
        alignSelf: 'center',
        color: 'white',
        marginTop: 30,
        fontSize: 12
    },
    header: { backgroundColor: C.headerColor },
    title: { color: 'black' }
})

export default Home;