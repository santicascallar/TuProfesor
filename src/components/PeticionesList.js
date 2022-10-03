import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PeticionesList ({item}){
    const navigation = useNavigation()

    return (
    
    <TouchableOpacity onPress={ () =>{
        navigation.navigate('DetallePeticion', {id:item.id})
      }}>
        
    <View>
        <Text style={styles.title}>Mi Peticion:</Text>

        <Text style={styles.text}> Numero: {item.idPeticion}</Text>
        <Text style={styles.text}> Alumno: {item.nombre} {item.apellido}</Text>
        <Text style={styles.text}> Descripcion: {item.descripcion}</Text>
        <Text style={styles.text}> Hora: {item.Horario} </Text>

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
    }
});