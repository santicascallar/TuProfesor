import React from 'react';
import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import CustomLogo from '../components/CustomLogo';

const LogIn = () => {

    const navigation = useNavigation();

    const [_email, setUsuario] = useState('');
    const [_password, setContraseña] = useState('');

    const inicioSesionBoton = () => {
        console.log({_email,_password})

        fetch("https://tuprofesorbackend.herokuapp.com/users/login",
        {method: 'POST',
        body:[_email,_password],
        redirect: 'follow'})
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //if(data.msj == 'hola'){
                navigation.navigate('Home') //pasar params navigation: navigation.navigate('Detalelprofesor', {})
            //}
        });
    }

    return (
        <View>
            <CustomLogo/>
            <CustomInput placeholder="Usuario" value={_email} setValue={setUsuario}/>
            <CustomInput placeholder="Contraseña" seguridadPassword={true} value={_password} setValue={setContraseña}/>

            <CustomButton text={'Iniciar sesion'} onPress={inicioSesionBoton}/>
            
            <CustomButton text="Todavia no tienes cuenta, registrate aqui"/>
        </View>
    )
}

export default LogIn;