import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Hi there!</Text>
            <Text style={styles.text}>My first screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        borderWidth: 3,
        borderColor: 'blue',
        color: 'red',
        marginBottom: 10,
    }
});

export default HomeScreen;