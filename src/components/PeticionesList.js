import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PeticionesList ({peticion}){
    const navigation = useNavigation()

    return (
    
    <TouchableOpacity onPress={ () =>{
        navigation.navigate('DetallePeticion', {id:peticion.idPeticion})
      }}>
        
    <View style={styles.container2}>
        <Text> id: {peticion.idPeticion}</Text>
        <Text style={styles.text}> Alumno: {peticion.nombre}</Text>
        <Text style={styles.text}> Descripcion: {peticion.descripcion}</Text>
        <Text style={styles.text}> Hora: {peticion.Horario}:00 </Text>
        <Text style={styles.text}> Estado: {peticion.estadoPeticion}</Text>

        {/*<Text style={styles.lista} >
            {profesores.nombre} {profesores.apellido} {profesores.ubicacion}
        </Text>*/}
    </View>

    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    lista: {
        color:'white',
        fontFamily: 'Kanit-Regular',
        borderWidth: 1,
        borderColor: "lightblue",
        padding: 10,
        backgroundColor: "#169DFF",
        marginTop: 15,
        marginBottom: -5,
        width: 350,
    },
    container2: {
        paddingBottom: 30
    },
});