import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableWithoutFeedback, TextInput } from 'react-native';
import Main from './components/Main.jsx'

export default function App() {
  return (
    <View>
     <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
