import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';

const Index = () => {

    const [profesores, setProfesores] = useState([]);

    useEffect(() =>{
        axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
        .then(response => {
            console.log(response.data);
            setProfesores(response.data);
        })
    })

    return (
        <View>
            <Text>Lista de Profesores</Text>
            <FlatList
            data = {profesores}
            />
        </View>
    )
}

export default Index;