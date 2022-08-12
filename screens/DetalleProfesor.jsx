import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

const DetalleProfesor = (props) => {
    const [profesores, setProfesores] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:3000/teachers", {
        method : 'GET',
        })
        .then(response => response.json())
        .then(data => setProfesores(data));
    },[]);

    return (
        <View>
            <Text>Profesor:</Text>
    
            <FlatList
                data={profesores}
                keyExtractor={ (item) => item.id}
                renderItem = {({item, index}) => <Text>
                    {item.nombre} {item.apellido} 
                    {item.edad} {item.descripcion} {item.ubicacion} {item.tipo} {item.horario} {item.materia}</Text>}
            /> 
            
        </View>
    );
}

export default DetalleProfesor;