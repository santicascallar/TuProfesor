import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

let data = [

]

const DropDown = () => {
    const [data, setData] = useState([])
    return (
        <View>
            <TouchableOpacity style={styles.dropdown}>
                <Text>Elige la materia</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: 'grey',
        padding: 8,
    },
})

export default DropDown;