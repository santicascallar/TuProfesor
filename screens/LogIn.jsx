import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import CustomLogo from '../components/CustomLogo';

const LogIn = () => {

    const navigation = useNavigation();
    const [userState, setUserState] = useState({
        email: '',
        password: '',
    });

    const inicioSesionBoton = () => {
        console.log(JSON.stringify(userState));
        fetch("https://tuprofesorbackend.herokuapp.com/users/login",
        {method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(userState)})
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.token){
                navigation.navigate('Home') //pasar params navigation: navigation.navigate('Detalelprofesor', {})
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <View style={styles.container}>
            <CustomLogo onPress={() => navigation.navigate('Main')}/>
            <TextInput placeholder="Usuario" value={userState.email} onChangeText={text => setUserState({ ...userState, email: text })}/>
            <TextInput placeholder="Contraseña" value={userState.password} secureTextEntry={true} onChangeText={text => setUserState({ ...userState, password: text })}/>
            

            <CustomButton text={'Iniciar sesion'}  onPress={() => navigation.navigate('Home')}/*onPress={inicioSesionBoton}/*//>
            
            <CustomButton text="Todavia no tienes cuenta, registrate aqui" onPress={() => navigation.navigate('Register')}/>
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

export default LogIn;