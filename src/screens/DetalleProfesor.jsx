import React from 'react';
import {useState, useEffect} from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomButton from '../components/CustomButton';
import { GetProfesor } from '../Services/TuProfesorService';
import { StyleSheet } from 'react-native-web';


const DetalleProfesor = (props) => {
    const [profesores, setProfesores] = useState([]);
    const navigation = useNavigation();
    
    useEffect(() =>{
        GetProfesor(props.route.params.id).then(data => setProfesores(data));
    },[]);
    
    return (
        <View>
            <FlatList
                data={profesores}
                keyExtractor={ (item) => item.id}
                renderItem = {({item, index}) => (
    
                <View>
                <Text style={styles.title}>{item.nombre} {item.apellido} </Text>
                <Text style={styles.text}> Email: {item.email}</Text>
                <Text style={styles.text}> Fecha de Nacimiento: {item.borndate}</Text>
                <Text style={styles.text}> Telefono: {item.telefono}</Text>
                <Text style={styles.text}> Ubicación: {item.ubicacion} </Text>

                <View style={styles.container}>
                    <CustomButton text={"Reservar Clase"} onPress={() => navigation.navigate('ReservarClase', {
                        id: item.id,
                    })}/>
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

const styles = StyleSheet.create({
    title: {
        marginLeft: 10,
        textBold: 10,
        fontSize: 40,
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
    }
});

export default DetalleProfesor;