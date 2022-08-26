import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomButton from '../../components/CustomButton';
import CustomLogo from '../../components/CustomLogo';
import CustomInput from '../../components/CustomInput';
import { AlumnoRegister } from '../../Services/TuProfesorService';

const RegisterAlumno = () => {
    const navigation = useNavigation();
    const [userState, setUserState] = useState({
        email: '',
        password: '',
        nombre:'',
        apellido:'',
        ubicacion:'',
        telefono:'',
    });   
    
    
        const RegisterBoton = async () => {
          if (!userState.email || !userState.password || !userState.nombre || !userState.apellido || !userState.telefono || !userState.ubicacion) {
            console.log("Llenar todos los datos");
          } else {
                await AlumnoRegister(userState).then(() => {
                navigation.navigate('Main');
              });
          }
        }

    return (
        <View style = {styles.container}>
            <CustomLogo onPress={() => navigation.navigate('Main')}/>
            <Text>Registrarse como Alumno</Text>
            <Text>Para buscar y reservar clases particulares con los multiples profesores que se encuentran en la pagina.</Text>

            <TextInput style = {styles.input} placeholder="Correo Electronico" setValue={setUserState.email}/>
            <TextInput style = {styles.input} placeholder="Contraseña" seguridadPassword={true} setValue={setUserState.password}/>
            <TextInput style = {styles.input} placeholder="Nombre" setValue={setUserState.nombre}/>
            <TextInput style = {styles.input} placeholder="Apellido" setValue={setUserState.apellido}/>
            <TextInput style = {styles.input} placeholder="Telefono" setValue={setUserState.telefono}/>
            <TextInput style = {styles.input} placeholder="Ubicacion" setValue={setUserState.ubicacion}/>

            <CustomButton text={'Registrarse'} onPress={RegisterBoton}/>
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

export default RegisterAlumno;