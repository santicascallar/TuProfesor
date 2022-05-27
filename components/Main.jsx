import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableWithoutFeedback, TextInput } from 'react-native';

const main = () => {
    return (
        <View>
            <Text>Tu Profesor</Text>
        </View>
    )
}

export default main;

fetchData = async () => {
    const response = await fetch("http://myipadress:5001/articles");
    const articles = await response.json();
    this.setState({ data: articles });
};