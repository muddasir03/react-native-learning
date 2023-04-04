import React from 'react';
import { Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const ListScreen = () => {
    const classData = [
        { name: "Harry", reg: "083" },
        { name: "John", reg: "084" },
        { name: "Smith", reg: "085" },
        { name: "Roy", reg: "086" },
        { name: "Michael", reg: "087" }
    ];
    return (
        <SafeAreaView>
            <FlatList style={styles.list}
                data={classData}
                renderItem={({ item }) => {
                    return <Text style={styles.text}>{item.name}--{item.reg}</Text>
                }}
                keyExtractor={classData => classData.reg}
            // horizontal
            // showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    list: {
        marginVertical: 30,
        marginHorizontal: 30,
        borderWidth: 1,
        borderColor: 'black',
    },
    text: {
        fontSize: 20,
        margin: 10,
    }
});
export default ListScreen;