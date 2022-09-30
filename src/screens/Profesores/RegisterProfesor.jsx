import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import CustomLogo from '../../components/CustomLogo';
import { ProfesorRegister } from '../../Services/TuProfesorService';

const RegisterProfesor = () => {

    const navigation = useNavigation();
    const [userState, setUserState] = useState({
      borndate:"2022-08-09",
      email:"",
      password:"",
      nombre:"",
      apellido:"",
      tipo:"",
      telefono:"",
      ubicacion:""
    });   
    
    
        const RegisterBoton = async () => {
          if (!userState.email || !userState.password || !userState.nombre || !userState.apellido || !userState.ubicacion || !userState.telefono || !userState.borndate || !userState.tipo) {
            console.log("Llenar todos los datos");
          } else {
                await ProfesorRegister(userState).then(() => {
                navigation.navigate('Main');
              });
          }
        }

    return (
        <View style = {styles.container}>
            <CustomLogo onPress={() => navigation.navigate('Main')}/>
            <Text>Registrarse como Profesor</Text>
            
            <TextInput style={styles.input} placeholder="Email" value={userState.email} onChangeText={text => setUserState({ ...userState, email: text })}/>
            <TextInput style={styles.input} placeholder="Contraseña" seguridadPassword={true} value={userState.password} onChangeText={text => setUserState({ ...userState, password: text })}/>
            <TextInput style={styles.input} placeholder="Nombre" value={userState.nombre} onChangeText={text => setUserState({ ...userState, nombre: text })}/>
            <TextInput style={styles.input} placeholder="Apellido" value={userState.apellido} onChangeText={text => setUserState({ ...userState, apellido: text })}/>
            <TextInput style={styles.input} placeholder="Telefono" value={userState.telefono} onChangeText={text => setUserState({ ...userState, telefono: text })}/>
            <TextInput style={styles.input} placeholder="Ubicacion" value={userState.ubicacion} onChangeText={text => setUserState({ ...userState, ubicacion: text })}/>
            <TextInput style={styles.input} placeholder="Tipo" value={userState.tipo} onChangeText={text => setUserState({ ...userState, tipo: text })}/>
            <TextInput style={styles.input} placeholder="Fecha de Nacimiento" value={userState.borndate} onChangeText={text => setUserState({ ...userState, borndate: text })}/>
            
            <CustomButton text={'Registrarse'} onPress={RegisterBoton}/>
        </View>
    )
    //FALTAN LOS QUE NO SE HACEN CON TEXTINPUT
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

export default RegisterProfesor;