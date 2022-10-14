import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, Alert, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import { useNavigation } from "@react-navigation/native";
import CustomButton from '../../components/CustomButton';
import CustomLogo from '../../components/CustomLogo';
import { Alumnologin } from '../../Services/TuProfesorService';
import { ActionTypes } from '../../../contextState';
import { useContextState } from '../../../contextState';

const LogInAlumno = () => {
    const navigation = useNavigation();
    const [userState, setUserState] = useState({
        email: '',
        password: '',
    });

    const { contextState, setContextState } = useContextState();

    const verificacion = async (event) => {
      //event.preventDefault()
      if (!userState.email || !userState.password) {
        console.log("No se han ingresado los valores")
      }
      else {
         Alumnologin(userState)
          .then((res) => {
            setContextState({
              type:ActionTypes.SetPersona,
              value: res
            })
            console.log("ok")
            navigation.navigate('HomeAlumno')
          })
          .catch(() => {
            Alert.alert("Su clave no esta autorizada")
            console.log("aca")
          });
      }
    }

    /*
      info: https://www.youtube.com/watch?v=1FFmawGsZjQ
      <ScrollView
      style={{flex: 1, backgroundColor: 'ffffff'}}
      showsVerticalScrollIndicator={false}>
      {/*Parte de arriba
      <ImageBackground
      source={require("../../imgs/fondo.jpg")}
      style={{
        height: Dimensions.get('window').height / 2.5,
      }}>
      <View style={styles.brandView}>
        <CustomLogo/>
        <Text style={styles.arribaText}>Tu Profesor</Text>
      </View>
      </ImageBackground>
      <View>
        <View style={{padding: 40}}>
          <Text style={{color: '#4632A1', fontSize: 34}}>Bienvenido</Text>
          <Text>
            ¿No tienes cuenta?
            <Text style={{color: 'red', fontStyle: 'italic'}}>
              Registrate ahora
            </Text>
          </Text>
          
          <View style={{marginTop: 50}}>
            <Item style={{borderColor: '#4632A1'}}>
              
              <TextInput value={userState.email} onChangeText={text => setUserState({ ...userState, email: text })}/>
            </Item>
            <Item style={{borderColor: '#4632A1', marginTop: 20}}>
              
              <TextInput value={userState.email} onChangeText={text => setUserState({ ...userState, email: text })}/>
            </Item>

            
          </View>
        </View>
      </View>
  </ScrollView> */

    return (

      <View style={styles.container}>
            <CustomLogo onPress={() => navigation.navigate('Main')}/>
            <Text>Inicio de sesion Alumno</Text>
            <TextInput style={styles.input}placeholder="Usuario" value={userState.email} onChangeText={text => setUserState({ ...userState, email: text })}/>
            <TextInput style={styles.input} placeholder="Contraseña" value={userState.password} secureTextEntry={true} onChangeText={text => setUserState({ ...userState, password: text })}/>
            

            <CustomButton text={'Iniciar sesion'} onPress={verificacion}/>
            
            <CustomButton text="Todavia no tienes cuenta, registrate aqui" onPress={() => navigation.navigate('Register')}/>
        </View>
            
     
    )
}


const styles = StyleSheet.create({
  brandView: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arribaText:{
      fontSize: 20
    }
  });

export default LogInAlumno;