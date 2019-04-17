import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text, Content, Container, Card, Icon, CardItem, Body, Left, Right } from 'native-base';
import C from '../Services/constants';

class CardShow extends Component {
    removeHtmlTags(html) { // for some reason summery from the api comes in html, this regex will remove the tags
        if (!html) return "";
        return html.replace(/<(?:.|\n)*?>/gm, '');
    }

    arrayToString(arr) { // for data that we wont to display as string and come from the api in array 
        if (!arr) return "";
        return arr.join(', ');
    }

    scheduleToString(schedule) {// convet schedule object to  string
        return this.arrayToString(schedule.days) + ' at ' + schedule.time
    }

    getNetwork(network) {// retrun network name
        if (!network) return "";
        else return network.name
    }

    render() {
        return (
            <Container style={styles.box}>
                <Content>
                    <Image style={styles.image} source={{ uri: this.props.show.image.medium }}></Image>
                    <Card>
                        <View style={styles.rowView}>
                            <View style={styles.subRow}>
                                <Icon style={styles.smallText} name="ios-star"></Icon>
                                <Text style={styles.smallText}>{this.props.show.rating.average}</Text>
                            </View>
                            <View style={styles.subRow}>
                                <Icon style={styles.smallText} name="ios-globe"></Icon>
                                <Text style={styles.smallText}>{this.props.show.language}</Text>

                            </View>
                            <View style={styles.subRow}>
                                <Icon style={styles.smallText} name="ios-home"></Icon>
                                <Text style={styles.smallText}>{this.getNetwork(this.props.show.network)}</Text>
                            </View>

                        </View>
                        <CardItem style={styles.cardItem}>
                            <Text>{this.removeHtmlTags(this.props.show.summary)}</Text>
                        </CardItem>
                        <CardItem style={styles.cardItem}>
                            <Text style={styles.meduimText}>Genres: {this.arrayToString(this.props.show.genres)}</Text>
                        </CardItem>
                        <CardItem style={styles.cardItem}>
                            <Text style={styles.meduimText}>Schedule: {this.scheduleToString(this.props.show.schedule)}</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: C.pageBackgroundColor,
        paddingHorizontal: 4
    },
    imageBox: {
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    cardItem: {
        backgroundColor: '#BDBDBD',
        color: 'white'
    },
    image: {
        height: 295, width: 220, alignSelf: 'center'
    },
    meduimText: {
        fontSize: 16,
    },
    smallText: {
        fontSize: 14,
        margin: 5,
        color: 'white'
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor:
            '#616161'
    },
    subRow: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})


export default CardShow;