import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomButton from '../components/CustomButton';
import { GetProfesor } from '../Services/TuProfesorService';


const DetalleProfesor = (props) => {
    const [profesores, setProfesores] = useState([]);
    const navigation = useNavigation();
    useEffect(() =>{
        GetProfesor(props.route.params.id).then(data => setProfesores(data));
    },[]);

    return (
        <View>
            <Text>Profesor:</Text>
    
            <FlatList
                data={profesores}
                keyExtractor={ (item) => item.id}
                renderItem = {({item, index}) => (
    
                <View>
                <Text>
                    {item.nombre} {item.apellido} 
                    {item.ubicacion} {item.disponibilidad}
                </Text>
                    <CustomButton text={"Reservar Clase"} onPress={() => navigation.navigate('ReservarClase', {
                        id: item.id,
                    })}/>
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

export default DetalleProfesor;