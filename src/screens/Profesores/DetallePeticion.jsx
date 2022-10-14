import React from "react";
import { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";
import CustomLogo from "../../components/CustomLogo";
import { updatePeticion } from "../../Services/TuProfesorService";
import { getPeticion } from "../../Services/TuProfesorService";


const DetallePeticion = (props) => {
    const navigation = useNavigation();
    const [peticion, setPeticion] = useState({});

    useEffect(() =>{
       // getPeticion(props.route.params.id).then(data => setPeticion(data));
        console.log("use effect antes del get")
        getPeticion(props.route.params.id, setPeticion) 
        console.log("use effect desp del get")
        console.log(peticion)
    },[]);

    const cambiarPeticion = (id, estado) => {

        updatePeticion(id, estado).then(data => setPeticion(data));
        navigation.navigate("HomeProfesor")
    }

    return (
        <View>
                <Text> id: {peticion.idPeticion}</Text>
                <Text> Alumno: {peticion.anombre} </Text>
                <Text> Descripcion: {peticion.descripcion}</Text>
                <Text> Hora: {peticion.horario}:00 </Text>
                <Text> Estado: {peticion.Estado}</Text>
                <View>
                    <CustomButton text={"Aceptar Peticion"} //onPress={cambiarPeticion(peticion[0].idPeticion, 2)}
                    />
                    <CustomButton text={"Rechazar Peticion"} //onPress={cambiarPeticion(peticion[0].idPeticion, 3)}
                    />
                </View> 
        </View>
    );
}

export default DetallePeticion;