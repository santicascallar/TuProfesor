import React from "react";
import { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";
import { updatePeticion } from "../../Services/TuProfesorService";
import { getPeticion } from "../../Services/TuProfesorService";


const DetallePeticion = (props) => {
    const navigation = useNavigation();
    const [peticion, setPeticion] = useState({});

    useEffect(() =>{
        getPeticion(props.route.params.id, setPeticion) 
        console.log(peticion)
    },[]);

    const cambiarPeticion = (id, estado) => {
        updatePeticion(id, estado)
        navigation.navigate("HomeProfesor")
    }

    return (
        <View>
                <Text style={styles.title}> Alumno: {peticion.anombre} </Text>
                <Text style={styles.text}> Descripcion: {peticion.descripcion}</Text>
                <Text style={styles.text}> Hora: {peticion.horario}:00 </Text>
                <Text style={styles.text}> Estado: {peticion.estadoPeticion}</Text>
                <View style={styles.container}>
                    <CustomButton text={"Aceptar Peticion"} onPress={() => cambiarPeticion(peticion.idPeticion, 2)} />
                    <CustomButton text={"Rechazar Peticion"} onPress={() => cambiarPeticion(peticion.idPeticion, 3)} />
                </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 10,
        textBold: 10,
        fontSize: 30,
        marginTop: 15,
    },
    text: {
        marginLeft: 10,
        fontSize: 15,
        marginTop: 7,
    },
    texts: {
        marginLeft: 10,
        fontSize: 15,
        marginTop: 4,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        flex:1
    }
});

export default DetallePeticion;