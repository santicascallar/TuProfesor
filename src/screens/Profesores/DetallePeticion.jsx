import React from "react";
import { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";
import CustomLogo from "../../components/CustomLogo";
import { updatePeticion } from "../../Services/TuProfesorService";


const DetallePeticion = (props) => {
    const navigation = useNavigation();
    const [peticion, setPeticion] = useState([]);

    useEffect(() =>{
        getPeticionesbyProfesor(props.route.params.id).then(data => setPeticion(data));
    },[]);

    const aceptarPeticion = () => {
        updatePeticion(data.id).then(data => setPeticion(data));
    }

    return (
        <View>
            <FlatList
                data={profesores}
                keyExtractor={ (item) => item.id}
                renderItem = {({item, index}) => (
    
                <View>
                <Text style={styles.title}>Mi Peticion:</Text>

                <Text style={styles.text}> Numero: {item.idPeticion}</Text>
                <Text style={styles.text}> Alumno: {item.nombre} {item.apellido}</Text>
                <Text style={styles.text}> Descripcion: {item.descripcion}</Text>
                <Text style={styles.text}> Hora: {item.Horario} </Text>

                <View style={styles.container}>
                    <CustomButton text={"Aceptar Peticion"} onPress={aceptar}/>
                    <CustomButton text={"Rechazar Peticion"} onPress={rechazar}/>
                </View>
                    
                </View>
                
                )}

            /> 

            {/*<FlatList
                    horizontal={true}
                    data={this.state.topPopularMovies}
                    renderItem={({ item }) => (
                    <View>
                        <Text>{item.original_title}</Text>
                        <Button onPress={this.mybuttonclick} title="hello"/>
                    </View>
                    )}
                    keyExtractor={item => item.id}
                />*/}
            
        </View>
    );
}

export default DetallePeticion;