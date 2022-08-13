import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfesoresList ({profesores}){
    const navigation = useNavigation()
    return (
    
    <TouchableOpacity onPress={ () =>{
        navigation.navigate('DetalleProfesor')
      }}>
        
    <View>
        <Text style={styles.lista} >
            {profesores.nombre} - {profesores.apellido} - {profesores.edad}
        </Text>
    </View>

    </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    lista: {
        color:'white',
        justifyContent:'center',
        fontFamily: 'Kanit-Regular',
        borderWidth: 1,
        borderColor: "lightblue",
        padding: 10,
        backgroundColor: "#5207f2",
        marginTop: 15,
        marginBottom: -5,
        width: 250
    }
    });