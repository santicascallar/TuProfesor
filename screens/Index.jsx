import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList } from 'react-native';

const Index = () => {

    const [profesores, setProfesores] = useState([]);

    useEffect(() =>{
        axios.get("https://localhost:5000/profesores")
        .then(res => {
            console.log(res.data);
            setProfesores(res.data);
        })
    })

    return (
        <View>
            <Text>Lista de Profesores</Text>
            <FlatList
            />
            <ContactosFlatlist contactos={contactos} verDetalles={verDetalles}/>
        </View>
    )
}

export default Index;