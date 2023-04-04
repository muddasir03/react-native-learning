import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Buttonclick = () => {
    return (
        <View>
            <Button
                title="Click on me "
                onPress={() => { console.log("Button pressed") }} />
            <TouchableOpacity onPress={() => { console.log("Touchable work") }} style={styles.opacity}>
                <Text>Click on me</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    opacity: {
        backgroundColor: "red",
        color: "blue",
        marginHorizontal: 155,
    }
});

export default Buttonclick;