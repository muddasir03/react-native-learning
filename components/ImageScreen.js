import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageScreen = props => {
    return (
        <View>
            <Text style={styles.text}>{props.name}</Text>
            <Image style={styles.image} source={props.imageSource} />

        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        font: 20,
        color: "blue",
        backgroundColor: "lightblue",
        margin: 20,

    },
    image: {
        width: 200,
        height: 200,
    }
});
export default ImageScreen;