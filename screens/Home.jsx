import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton';
import DropDown from '../components/DropDown';
import CustomLogo from '../components/CustomLogo';
import DetalleProfesor from './DetalleProfesor';
import ProfesoresList from '../components/ProfesoresList';

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

    return (
        <View>
            <CustomLogo/>
            <DropDown update={setProfesores}/>

            <Text>Lista de Profesores</Text>

            {/*<FlatList
                data={edificio}
                renderItem={({ item }) => <EdificiosListItem key={item.direccion} edificio={item} />}
                 keyExtractor={item => item.direccion}
            />*/}
    
            <FlatList
                data={profesores}
                keyExtractor={ (item) => item.id}
                renderItem = {({item}) => <ProfesoresList key={item.id} profesores={item} />
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