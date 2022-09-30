import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView, CheckBox } from 'react-native';
import { useContextState } from '../../../contextState';
import CustomButton from '../../components/CustomButton';
import { getPeticionesbyProfesor } from '../../Services/TuProfesorService';

const HomeProfesor = () => {
    const [peticiones, setPeticiones] = useState([]);
    const {contextState, setContextState}= useContextState();

    useEffect(() =>{
        console.log(contextState)
        getPeticionesbyProfesor(contextState.persona[0].id).then(data => setPeticiones(data));
    } ,[]);

    useEffect(() => {
        if(!contextState.persona[0].token){ 
          console.log('No hay token');
          navigation.navigate("LogIn")  //Si no hay token en el contexto, te manda a la pantalla de login
        }
        else{
          console.log("HAY TOKEN")
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido, {contextState.persona[0].nombre}</Text>
            <Text style={styles.title}>Peticiones de Alumnos</Text>
            <FlatList
                data={peticiones}
                renderItem={({item}) => {
                    return (
                        <View style={styles.item}>
                            <Text style={styles.itemText}>Peticion por {item.nombre}</Text>
                            <Text style={styles.itemText}>{item.Horario}:00</Text>
                            <Text style={styles.itemText}>Peticion {item.nombreEstado}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default HomeProfesor

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
