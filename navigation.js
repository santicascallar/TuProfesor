import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Main from "./screens/Main.jsx";
import logIn from "./screens/logIn.jsx";

const MainStackNavigator = createNativeStackNavigator();

function MyStack(){
    return(
        <MainStackNavigator.Navigator
            initialRouteName="Main"
        >
            <MainStackNavigator.Screen
                name="Main"
                component={Main}
            />
            <MainStackNavigator.Screen
                name="logIn"
                component={logIn}
            />
        </MainStackNavigator.Navigator>
    );
}

export default MyStack;