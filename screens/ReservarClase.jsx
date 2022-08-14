import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomButton from '../components/CustomButton';
import CustomLogo from '../components/CustomLogo';

const ReservarClase = () => {

    return (
        <View style = {styles.container}>
            <CustomLogo/>
            <Text>Tu Profesor</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
  });

export default ReservarClase;