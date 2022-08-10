import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const CustomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
        </Tab.Navigator>
    )
}

//export default CustomTab;

export default function App() {
  return (
    <NavigationContainer>
      <CustomTab />
    </NavigationContainer>
  );
}
