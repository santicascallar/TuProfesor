import React from "react";
import {View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const customButton = ({text}) => {

    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate('index')} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        width: '100',
        padding: 15,
        marginVertical: 5,

        alignItems: 'center', //cambiar
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    }
})

export default customButton;