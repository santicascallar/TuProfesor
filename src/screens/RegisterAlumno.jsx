import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomButton from '../components/CustomButton';
import CustomLogo from '../components/CustomLogo';
import CustomInput from '../components/CustomInput';
import { register } from '../Services/TuProfesorService';

const RegisterAlumno = () => {

    const navigation = useNavigation();
    const [userState, setUserState] = useState({
        email: '',
        password: '',
    });

    useEffect(() =>{
        register(userState).then(data => setUserState(data));
    } ,[]);

    return (
        <View style = {styles.container}>
            <CustomLogo onPress={() => navigation.navigate('Main')}/>
            <Text>Registrarse como Alumno</Text>
            <Text>Para buscar y reservar clases particulares con los multiples 
                profesores que se encuentran en la pagina.</Text>

            <CustomInput placeholder="Correo Electronico" setValue={setUserState.email}/>
            <CustomInput placeholder="Contraseña" seguridadPassword={true} setValue={setUserState.password}/>
            <CustomInput placeholder="Repetir Contraseña" seguridadPassword={true} setValue={setUserState.password}/>

            <CustomButton text={'Registrarse'} onPress={() => navigation.navigate('Main')}/>
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

export default RegisterAlumno;