import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, SectionList } from 'react-native';

const ListScreen = (props) => {
    const classData = [
        { name: "Harry", reg: "083" },
        { name: "John", reg: "084" },
        { name: "Smith", reg: "085" },
        { name: "Roy", reg: "086" },
        { name: "Michael", reg: "087" }
    ];
    const sectionData = [
        {
            title: 'Main dishes',
            data: ['Pizza', 'Burger', 'Risotto'],
        },
        {
            title: 'Sides',
            data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
        },
        {
            title: 'Drinks',
            data: ['Water', 'Coke', 'Beer'],
        },
        {
            title: 'Desserts',
            data: ['Cheese Cake', 'Ice Cream'],
        },
    ];
    // checking if data is passed successfully from buttonclick component to here.
    console.warn(props.route.params);
    const { name, age } = props.route.params;
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
            <SectionList
                sections={sectionData}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
            <Text>Name :{name}</Text>
            <Text>Age :{age}</Text>
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
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
    },
});
export default ListScreen;
