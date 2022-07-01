import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList } from 'react-native';
import DropDown from '../components/DropDown';

const Home = () => {

    const [profesores, setProfesores] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:3000", {
        method : 'GET'
        })
        .then(response => response.json())
        .then(data => setProfesores(data.teachers));
    });

    /*useEffect(() =>{
        axios.get("https://localhost:5000/profesores")
        .then(response => {
            console.log(response.data);
            setProfesores(response.data);
        })
    })
    <FlatList 
        data={profesores}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => (
        <Text>
            {item.nombre}
        </Text>
        )}
    />*/

    return (
        <View>
            {/*input dropdown con las materias*/}
            <DropDown/>
            <Text>Lista de Profesores</Text>
            <FlatList 
                data={profesores}
                keyExtractor={ (item) => item.id}
                renderItem = {({item, index}) => <Text>{item.nombre}</Text>}
            />
        </View>
    )
}

export default Home;