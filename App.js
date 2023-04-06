import React from 'react';
import { ScrollView, Button } from 'react-native';
import ListScreen from './src/screen/ListScreen';
import HomeScreen from './src/screen/HomeScreen';
import Buttonclick from './src/screen/Buttonclick';
import ImageReuse from './src/screen/ImageReuse';
import ModelPressable from './src/screen/ModalPressable';
import Statusbar from './src/screen/Statusbar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const btnAction = () => {
  return ListScreen;
}
export default function App() {
  return (
    <ScrollView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Buttonclick'>

          <Stack.Screen name="button" component={Buttonclick}
            screenOptions={{
              title: "Button Screen",
              headerStyle: {
                backgroundColor: 'blue',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25
              }
            }} />
          <Stack.Screen name="HomeScreen" component={HomeScreen}
            options={{
              // Adding header title here
              // headerTitle: () => <Button onPress={btnAction} title="List" />,
              // Adding something on header right side.
              //   headerRight: () => <ImageReuse />,
              headerStyle: {
                backgroundColor: 'blue',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25
              }
            }} />
          <Stack.Screen name="ListScreen" component={ListScreen} />
          <Stack.Screen name="ImageReuse" component={ImageReuse} />
          <Stack.Screen name="ModelPressable" component={ModelPressable} />
          <Stack.Screen name="Statusbar" component={Statusbar} />
        </Stack.Navigator>
      </NavigationContainer>

    </ScrollView>

  );
}

// {/* Attributes of styling in screen elements if we want to style all screens same 
//          then we have to use screenOptions attribute otherwise use option attribute.
//          In my Case, i am using individual styling for homescreen using option attribute and overall app
//          screen styling for my app in buttonclick component using screenOptions*/}
