import React from 'react';
import { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, Image, TouchableHighlight, LogBox } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import axios from 'axios';

const LogIn = () => {

    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');

    //const inicioSesionBoton = () => {} /ver como hacer para que el botono sea generico

    useEffect(() =>{
        axios.post("https://localhost:5000/users/LogIn", {
            usuario : setUsuario,
            contraseña : setContraseña

        })
        .then(res => {
            console.log(res.status);
            setUsuario(res.data);
            setContraseña(res.data);
        })
    })

    return (
        <View>
            <Text>Tu Profesor</Text>
            <CustomInput placeholder="Correo Electronico" value={usuario} setValue={setUsuario}/>
            <CustomInput placeholder="Contraseña" seguridadPassword={true} value={contraseña} setValue={setContraseña}/>

            <TouchableHighlight
                onPress={() => navigation.navigate('Index')}
            >
                <Text>Iniciar Sesion</Text>
            </TouchableHighlight>
            {/*<CustomButton text="Iniciar Sesion"/>*/}
            <CustomButton text="Todavia no tienes cuenta, registrate aqui"/>
        </View>
    )
}

export default LogIn;