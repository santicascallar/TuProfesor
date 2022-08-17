import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Main from "./screens/Main.jsx";
import LogIn from "./screens/LogIn";
import Home from "./screens/Home";
import DetalleProfesor from "./screens/DetalleProfesor";
import ReservarClase from "./screens/ReservarClase";

const MainStackNavigator = createNativeStackNavigator();

function MyStack(){
    return(
        <NavigationContainer>
        <MainStackNavigator.Navigator
            initialRouteName="Main"
        >
            <MainStackNavigator.Screen
                name="Main"
                component={Main}
            />
            <MainStackNavigator.Screen
                name="LogIn"
                component={LogIn}
            />
            <MainStackNavigator.Screen
                name="Home"
                component={Home}
            />
            <MainStackNavigator.Screen
                name="DetalleProfesor"
                component={DetalleProfesor}
            />
            <MainStackNavigator.Screen
                name="ReservarClase"
                component={ReservarClase}
            />
        </MainStackNavigator.Navigator>
        </NavigationContainer>
    );
}

export default MyStack;