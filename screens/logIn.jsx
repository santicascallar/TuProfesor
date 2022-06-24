import React from 'react';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View, Image, TouchableHighlight, LogBox } from 'react-native';
import customInput from '../components/customInput';
import customButton from '../components/customButton';

const logIn = () => {

    const {username, setUsername} = useState('');
    const {password, setPassword} = useState('');

    const inicioSesionBoton = () => {} //ver como hacer para que el botono sea generico

    return (
        <View>
            <Text>Tu Profesor</Text>
            <customInput placeholder="Correo Electronico" value={username} setValue={setUsername}/>
            <customInput placeholder="Contraseña" seguridadPassword={true} value={password} setValue={setPassword}/>

            <customButton text="Iniciar Sesion"/>
            <customButton text="Todavia no tienes cuenta, registrate aqui"/>
        </View>
    )
}

export default logIn;