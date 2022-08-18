import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import CustomLogo from '../components/CustomLogo';
import { login } from '../Services/TuProfesorService';

const LogIn = () => {

    const navigation = useNavigation();
    const [userState, setUserState] = useState({
        email: '',
        password: '',
    });

    const inicioSesionBoton = async () => {

        if (!userState.email || !userState.password) {
          console.log("No se puede iniciar sesión sin email o contraseña");
        } else {
          await login(userState).then(() => {
            navigation.navigate('Home');
          })
        .catch((error) => {
              console.log("no entro")
              return error;
            });
        }
    }

    return (
        <View style={styles.container}>
            <CustomLogo onPress={() => navigation.navigate('Main')}/>
            <TextInput placeholder="Usuario" value={userState.email} onChangeText={text => setUserState({ ...userState, email: text })}/>
            <TextInput placeholder="Contraseña" value={userState.password} secureTextEntry={true} onChangeText={text => setUserState({ ...userState, password: text })}/>
            

            <CustomButton text={'Iniciar sesion'} onPress={inicioSesionBoton}/>
            
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