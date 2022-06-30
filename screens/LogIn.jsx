import React from 'react';
import { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, Image, TouchableHighlight, LogBox } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import axios from 'axios';

const LogIn = () => {

    const navigation = useNavigation();
    
    const [_usuario, setUsuario] = useState('');
    const [_contrasena, setContraseña] = useState('');

    const inicioSesionBoton = () => {
        console.log({_usuario,_contrasena})


        fetch("http://localhost:3000/login?usuario="+_usuario+"&contrasena="+_contrasena,
        {method: 'POST',
        redirect: 'follow'})
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.msj == 'hola'){
                navigation.navigate('Home')
            }
        });

        /*axios.post("http://localhost:3000/login", {
            usuario : _usuario,
            contrasena : _contrasena

        })
        .then(res => {
            console.log(res);
            //setUsuario(res.data);
            //setContraseña(res.data);
        })*/
    }

    /*useEffect(() =>{
        axios.post("https://localhost:5000/users/LogIn", {
            usuario : _usuario,
            contrasena : _contrasena

        })
        .then(res => {
            console.log(res.status);
            setUsuario(res.data);
            setContraseña(res.data);
        })
    })
*/

    return (
        <View>
            <Text>Tu Profesor</Text>
            <CustomInput placeholder="Usuariooo" value={_usuario} setValue={setUsuario}/>
            <CustomInput placeholder="Contraseña" seguridadPassword={true} value={_contrasena} setValue={setContraseña}/>

            <TouchableHighlight
                onPress={inicioSesionBoton}
            >
                <Text>Iniciar Sesion</Text>
            </TouchableHighlight>
            {/*<CustomButton text="Iniciar Sesion"/>*/}
            <CustomButton text="Todavia no tienes cuenta, registrate aqui"/>
        </View>
    )
}

export default LogIn;