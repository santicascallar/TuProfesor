import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomCard from './CustomCard';
import { GetMaterias } from '../Services/TuProfesorService';
import { useEffect } from 'react';

export default function ProfesoresList ({profesores}){
    const navigation = useNavigation()

    /*const [materias, setMaterias] = useState([]);

    useEffect(() =>{
        GetMaterias().then((data) => setMaterias(data))
        .catch((err) => {
          console.log(err)
    })},[])
    */

    return (
    
    <TouchableOpacity onPress={ () =>{
        navigation.navigate('DetalleProfesor', {id:profesores.id})
      }}>
        
    <View>
        <CustomCard
        textNombre = {profesores.nombre}
        textApellido = {profesores.apellido}
        //textMateria = {profesores.materias.Materia}
        textEdad = {profesores.borndate}
        textUbicacion = {profesores.ubicacion}
        />

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