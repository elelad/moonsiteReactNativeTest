import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text, Content, Container, Card, Icon, CardItem, Body, Left, Right } from 'native-base';

class CardShow extends Component {
    

    strip(html) {
        if (!html) return "";
        return html.replace(/<(?:.|\n)*?>/gm, '');
    }

    arrayToString(arr) {
        if (!arr) return "";
        return arr.join(', ');
    }

    scheduleToString(schedule) {
        return this.arrayToString(schedule.days) + ' at ' + schedule.time
    }

    getNetwork(network){
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
                            <Text style={styles.whiteText}>{this.strip(this.props.show.summary)}</Text>
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
        backgroundColor: '#424242',
        paddingHorizontal: 4
    },
    imageBox: {
        justifyContent: 'center',
        backgroundColor: 'black'

    },
    cardItem:{
        backgroundColor: '#BDBDBD',
        color: 'white'
    },
    whiteText: {
        //color: 'white'
    },
    image: {
        height: 295, width: 220, alignSelf: 'center'
    },
    meduimText: {
        fontSize: 16,
    },
    smallText:{
        fontSize: 14,
        margin: 5,
        color: 'white'
    },
    rowView:{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, paddingHorizontal: 10, backgroundColor: '#616161' },
    subRow: {flexDirection: 'row', alignItems: 'center'}
})


export default CardShow;