import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView, CheckBox } from 'react-native';
import { useContextState } from '../../../contextState';
import CustomButton from '../../components/CustomButton';
import { getPeticionesbyAlumno } from '../../Services/TuProfesorService';

const PerfilAlumno = () => {
    const [peticiones, setPeticiones] = useState([]);
    const {contextState, setContextState}= useContextState();
    
    useEffect(() =>{
        console.log(contextState)
        getPeticionesbyAlumno(contextState.persona[0].id).then(data => setPeticiones(data));
    } ,[]);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido {contextState.nombre}</Text>
            <Text style={styles.title}>Mis peticiones:</Text>

            <View style={styles.container}>
                <FlatList
                    data={peticiones}
                    keyExtractor={ (item) => item.id}
                    renderItem = {({item, index}) => (
                        <View>
                        <Text style={styles.itemText}>Peticion realizada a {item.nombre} {item.apellido}</Text>
                        <Text>Descripcion: {item.descripcion}</Text>
                        <Text>Hora: {item.Horario}</Text>
                        <Text>Estado: {item.Estado}</Text> 
                        </View>
                    )
                }
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default PerfilAlumno

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    itemText: {
        fontSize: 18,
    },
});
