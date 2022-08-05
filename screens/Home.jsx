import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import DropDown from '../components/DropDown';

const Home = () => {
    const [profesores, setProfesores] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:3000/teachers", {
        method : 'GET',
        //Authorization: "Bearer " + dsffdsfddsf
        })
        .then(response => response.json())
        .then(data => setProfesores(data));
    },[]);
    
    /*useEffect(() =>{
        axios.get("https://localhost:5000/profesores")
        .then(response => {
            console.log(response.data);
            setProfesores(response.data);
        })
    })
    */

    return (
        <View>
            {/*input dropdown con las materias*/}
            <DropDown/>
            <Text>Lista de Profesores</Text>

            {/*{profesores.map((obj =>(
            <Text>{obj.nombre}</Text>
            ))}
            */}
    
            <FlatList
                data={profesores}
                keyExtractor={ (item) => item.id}
                renderItem = {({item, index}) => <Text>{item.nombre} {item.apellido} {item.edad}</Text>}
            /> 
            
        </View>
    );
}

export default Home;