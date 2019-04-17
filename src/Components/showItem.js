import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text, Icon } from 'native-base';



class ShowItem extends Component {
    render() {
        return (
            <View style={styles.box}>
                <Image source={{ uri: this.props.imageUrl }}//'http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg'
                    style={styles.image} />
                <View style={styles.textBox}>
                    <Text style={styles.title}>{this.props.name}</Text>
                    <View style={styles.ratingBox}>
                        <Icon style={styles.star} name="star"></Icon>
                        <Text style={styles.rating}>{this.props.rating}</Text>
                    </View>
                </View>
                <Icon style={styles.arrow} name="ios-arrow-forward"></Icon>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black'

    },
    image: {
        width: 72,
        height: 100,
        resizeMode: 'cover',
        marginRight: 10
    },
    textBox: {
        margin: 10,
        flex: 1
    },
    title: {
        color: 'white',
        fontSize: 24,
        marginBottom: 5
    },
    ratingBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    star: {
        color: 'white',
        fontSize: 18
    },
    rating: {
        color: 'white',
        marginLeft: 10
    },
    arrow: {
        alignSelf: 'center',
        color: 'white',
        marginRight: 15
    }
})


export default ShowItem;