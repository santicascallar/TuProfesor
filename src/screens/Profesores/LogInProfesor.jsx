import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, Alert} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomButton from '../../components/CustomButton';
import CustomLogo from '../../components/CustomLogo';
import { getVerificacion } from '../../Services/TuProfesorService';
import { useContextState } from '../../../contextState';
import { ActionTypes } from '../../../contextState';

const LogInProfesor = () => {
    const navigation = useNavigation();
    const [userState, setUserState] = useState({
        email: '',
        password: '',
    });

    const { contextState, setContextState } = useContextState();

    const verificacion = async () => {
      if (!userState.email || !userState.password) {
        console.log("No se han ingresado los valores")
      }
      else {
         getVerificacion(userState)
          .then((res) => {
            setContextState({
              type:ActionTypes.SetPersona,
              value: res
            })
            console.log("ok")
            navigation.navigate('HomeProfesor')
          })
          .catch(() => {
            Alert.alert("Su clave no esta autorizada")
            console.log("aca")
          });
      }
    }

    return (
        <View style={styles.container}>
            <CustomLogo onPress={() => navigation.navigate('Main')}/>
            <Text>Inicio de sesion Profesor</Text>

            <TextInput 
            style={styles.input}
            placeholder="Usuario" 
            value={userState.email} 
            onChangeText={text => setUserState({ ...userState, email: text })}
            />

            <TextInput 
            style={styles.input} 
            placeholder="Contraseña" 
            value={userState.password} 
            secureTextEntry={true}
            onChangeText={text => setUserState({ ...userState, password: text })}
            />

            <CustomButton text={'Iniciar sesion'} onPress={verificacion}/>
            
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

export default LogInProfesor;