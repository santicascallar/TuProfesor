import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomButton from '../components/CustomButton';
import CustomLogo from '../components/CustomLogo';

const Main = () => {

    const navigation = useNavigation();

    return (
        <View style = {styles.container}>
            <CustomLogo onPress={() => navigation.navigate('Main')}/>
            <Text>Iniciar Sesion como</Text>

            <CustomButton text={'Profesor'} onPress={() => navigation.navigate('LogInProfesor')}/>
            <CustomButton text={'Alumno'} onPress={() => navigation.navigate('LogInAlumno')}/>

            <CustomButton text={'¿No tienes cuenta? Regístrate'} onPress={() => navigation.navigate('Register')}/>
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

export default Main;