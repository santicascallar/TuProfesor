import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableWithoutFeedback, TextInput } from 'react-native';
import index from './components/index.jsx'
import Main from './main'
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <index />
    
  );
  /*return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Principal" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
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
