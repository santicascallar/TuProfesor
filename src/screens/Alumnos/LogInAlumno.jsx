import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomButton from '../../components/CustomButton';
import CustomLogo from '../../components/CustomLogo';
import { Alumnologin } from '../../Services/TuProfesorService';

const LogInAlumno = () => {
    const navigation = useNavigation();
    const [userState, setUserState] = useState({
        email: '',
        password: '',
    });


    const inicioSesionBoton = async () => {
      if (!userState.email || !userState.password) {
        console.log("No se puede iniciar sesión sin email o contraseña");
      } else {
            await Alumnologin(userState).then(() => {
            navigation.navigate('Home');  
          });
      }
    }

    return (
        <View style={styles.container}>
            <CustomLogo onPress={() => navigation.navigate('Main')}/>
            <Text>Inicio de sesion Alumno</Text>
            <TextInput style={styles.input}placeholder="Usuario" value={userState.email} onChangeText={text => setUserState({ ...userState, email: text })}/>
            <TextInput style={styles.input} placeholder="Contraseña" value={userState.password} secureTextEntry={true} onChangeText={text => setUserState({ ...userState, password: text })}/>
            

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
    },
    input:{
      backgroundColor: 'white',
      borderColor: 'black',
      borderRadius: 5, //lo curva del borde
      paddingHorizontal: 10,
      marginVertical: 5,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10
    }
  });

export default LogInAlumno;