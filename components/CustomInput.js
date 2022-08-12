import React from "react";
import {View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({value, setValue, placeholder, seguridadPassword}) => {
    return (
        <View>
            <TextInput 
            style = {styles.input}
            value={value}
            onChangeText={value=>setValue(value)}
            placeholder={placeholder}
            secureTextEntry={seguridadPassword}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        width: '100%',
        borderColor: 'blue',
        borderRadius: 5, //lo curva del borde
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})

export default CustomInput;