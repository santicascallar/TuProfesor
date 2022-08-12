import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton';
import DropDown from '../components/DropDown';
import CustomLogo from '../components/CustomLogo';
import DetalleProfesor from './DetalleProfesor';

const Home = () => {
    const [profesores, setProfesores] = useState([]);

    useEffect(() =>{
        fetch("https://tuprofesorbackend.herokuapp.com/teachers", {
        method : 'GET',
        //Authorization: "Bearer " + dsffdsfddsf
        })
        .then(response => response.json())
        .then(data => setProfesores(data));
    },[]);
    /*const verDetalles=(id, nombre, fecha) => {
        navigation.navigate('Detalles',{id, nombre, fecha})
    }*/

    return (
        <View>
            <CustomLogo/>

            <DropDown update={setProfesores}/>

            <Text>Lista de Profesores</Text>
    
            <FlatList
                data={profesores}
                keyExtractor={ (item) => item.id}
                renderItem = {({item, index}) => 
                <Text>{item.nombre} {item.apellido} {item.edad}</Text>

                //<CustomButton text={item.nombre}/>
            }
                showsVerticalScrollIndicator={false}
            /> 
                <CustomButton text={"Detalles"} onPress={() => {
                     /* 1. Navigate to the Details route with params */
                        navigation.navigate('DetalleProfesor', {
                            itemId: item.id,
                })
                }}
          />
        </View>
    );
}

//https://reactnavigation.org/docs/params/

export default Home;