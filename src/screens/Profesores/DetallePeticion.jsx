import React from "react";
import { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";
import CustomLogo from "../../components/CustomLogo";
import { updatePeticion } from "../../Services/TuProfesorService";
import PeticionesList from "../../components/PeticionesList";


const DetallePeticion = (props) => {
    const navigation = useNavigation();
    const [peticion, setPeticion] = useState([]);

    useEffect(() =>{
        getPeticionesbyProfesor(props.route.params.id).then(data => setPeticion(data));
    },[]);

    const cambiarPeticion = (id, estado) => {

        updatePeticion(id, estado).then(data => setPeticion(data));
    }

    return (
        <View>
            <FlatList
                data={profesores}
                keyExtractor={ (item) => item.idPeticion}
                renderItem = {({item}) => <PeticionesList key={item.idPeticion} peticion={item} />}
            />
                <View>

                <View style={styles.container}>
                    <CustomButton text={"Aceptar Peticion"} onPress={cambiarPeticion(item.idPeticion, 2)}/>
                    <CustomButton text={"Rechazar Peticion"} onPress={cambiarPeticion(item.idPeticion, 3)}/>
                </View>
                    
                </View>
        </View>
    );
}

export default DetallePeticion;