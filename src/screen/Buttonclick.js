import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();
const Buttonclick = ({ navigation }) => {
    const name = "Muddasar";
    const age = "20";
    return (
        <View>
            <Button
                title="List Screen"
                // Passing data from buttonclick to listScreen.
                onPress={() => navigation.navigate("ListScreen", { name: name, age: age })} />
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={styles.opacity}>
                <Text>Home Screen</Text>
            </TouchableOpacity>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="Signup" component={Signup} />
            </Tab.Navigator>
            {/* <Drawer.Navigator>
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Signup" component={Signup} />
            </Drawer.Navigator> */}
        </View>

    )
};
const Login = () => {
    return (<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><Text>I am Login</Text></View>)
};
const Signup = () => {
    return (<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>I am Signup</Text>
    </View>)
};
const styles = StyleSheet.create({
    opacity: {
        backgroundColor: "red",
        color: "blue",
        marginHorizontal: 155,
    }
});

export default Buttonclick;
