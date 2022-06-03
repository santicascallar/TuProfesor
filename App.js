import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableWithoutFeedback, TextInput } from 'react-native';
import Main from './components/Main.jsx'
import Main from './main'
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const contactold = [{Id:3,Nombre:'Juan', FechaNac:'10/5/2001'}, 
{Id:5, Nombre:'Juana', FechaNac:'11/2/2000'},
{Id:8, Nombre:'Mia', FechaNac:'21/1/2002'},

]

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Principal" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  /*return (
      <Main />
  );*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
