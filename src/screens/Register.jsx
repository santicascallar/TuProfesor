import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomButton from '../components/CustomButton';
import CustomLogo from '../components/CustomLogo';

const Register = () => {

    const navigation = useNavigation();

    return (
        <View style = {styles.container}>
            <CustomLogo onPress={() => navigation.navigate('Main')}/>
            <Text>Registrarse como</Text>

            <CustomButton text={'Profesor'} onPress={() => navigation.navigate('RegisterProfesor')}/>
            <CustomButton text={'Alumno'} onPress={() => navigation.navigate('RegisterAlumno')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1
    }
  });

export default Register;