import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";

//screens
import Main from "../screens/Main";
import LogInProfesor from "../screens/Profesores/LogInProfesor";
import LogInAlumno from "../screens/Alumnos/LogInAlumno";
import Home from "../screens/Home";
import DetalleProfesor from "../screens/DetalleProfesor";
import ReservarClase from "../screens/ReservarClase";
import Register from "../screens/Register";
import RegisterAlumno from "../screens/Alumnos/RegisterAlumno";
import RegisterProfesor from "../screens/Profesores/RegisterProfesor";

function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50, flex: 1 }}
        source={require('../imgs/logo3.png')}
      />
    );
  }

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
                options={{
                    headerShown: false
                }}
            />
            <MainStackNavigator.Screen
                name="LogInProfesor"
                component={LogInProfesor}
                options={{ 
                    headerTitle: '', 
                    headerStyle: { backgroundColor: '#169DFF' }    
                }}
            />
            <MainStackNavigator.Screen
                name="LogInAlumno"
                component={LogInAlumno}
                options={{ 
                    headerTitle: '', 
                    headerStyle: { backgroundColor: '#169DFF' }    
                }}
            />
            <MainStackNavigator.Screen
                name="Home"
                component={Home}
                options={{ 
                   headerShown: false
                }}
            />
            <MainStackNavigator.Screen
                name="DetalleProfesor"
                component={DetalleProfesor}
                options={{ 
                    headerTitle: LogoTitle, 
                    headerStyle: { backgroundColor: '#169DFF' }    
                }}
            />
            <MainStackNavigator.Screen
                name="ReservarClase"
                component={ReservarClase}
                options={{ 
                    headerTitle: LogoTitle, 
                    headerStyle: { backgroundColor: '#169DFF' }    
                }}
            />
            <MainStackNavigator.Screen
                name="Register"
                component={Register}
                options={{ 
                    headerTitle: LogoTitle, 
                    headerStyle: { backgroundColor: '#169DFF' }    
                }}
            />
            <MainStackNavigator.Screen
                name="RegisterAlumno"
                component={RegisterAlumno}
                options={{ 
                    headerTitle: LogoTitle, 
                    headerStyle: { backgroundColor: '#169DFF' }    
                }}
            />
            <MainStackNavigator.Screen
                name="RegisterProfesor"
                component={RegisterProfesor}
                options={{ 
                    headerTitle: LogoTitle, 
                    headerStyle: { backgroundColor: '#169DFF' }    
                }}
            />
        </MainStackNavigator.Navigator>
        </NavigationContainer>
    );
}

export default MyStack;