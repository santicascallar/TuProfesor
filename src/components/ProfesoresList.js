import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfesoresList ({profesores}){
    const navigation = useNavigation()
    return (
    
    <TouchableOpacity onPress={ () =>{
        navigation.navigate('DetalleProfesor', {id:profesores.id})
      }}>
        
    <View>
        <Text style={styles.lista} >
            {profesores.nombre} {profesores.apellido} {profesores.ubicacion}
        </Text>
    </View>

    </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    lista: {
        color:'white',
        fontFamily: 'Kanit-Regular',
        borderWidth: 1,
        borderColor: "lightblue",
        padding: 10,
        backgroundColor: "#169DFF",
        marginTop: 15,
        marginBottom: -5,
        width: 350,
    }
});