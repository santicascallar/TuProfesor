import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';
//import ModalDropdown from 'react-native-modal-dropdown';

const Home = () => {

    const [profesores, setProfesores] = useState([]);

    fetch("http://localhost:3000/")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setProfesores(response.data)
    });

    /*useEffect(() =>{
        axios.get("https://localhost:5000/profesores")
        .then(response => {
            console.log(response.data);
            setProfesores(response.data);
        })
    })*/

    return (
        <View>
            <Text>Lista de Profesores</Text>
            {/*input dropdown con las materias*/}
            {/*<ModalDropdown options={['Matematica', 'Lengua', 'Fisica']}>
            </ModalDropdown>*/}
        </View>
    )
}

export default Home;