import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import CustomButton from '../components/CustomButton';
import CustomLogo from '../components/CustomLogo';
import { TextInput } from 'react-native-paper';
import { ClaseReservar } from '../Services/TuProfesorService';
import { useContextState } from '../../contextState';

const ReservarClase = ({route}) => {

    const navigation = useNavigation();
    const {contextState, setContextState} = useContextState();
    const [userState, setUserState] = useState({
        horario: '',
        detalles: '',
        idProfesor: route.params.id,
        idAlumno: contextState.persona[0].id,
    });
    
    const ReservarBoton = async () => {
        console.log(contextState.persona[0].id)
        if (!userState.horario || !userState.detalles) {
          console.log("error");
        } else {
        await ClaseReservar(userState).then(() => {
              navigation.navigate('HomeAlumno');  
          });
        }
      }
    

    return (
        <View style = {styles.container}>
            <CustomLogo/>
            <Text>Reserva tu clase</Text>

            <TextInput style={styles.input}placeholder="Horario" value={userState.horario} onChangeText={text => setUserState({ ...userState, horario: text })}/>
            <TextInput style={styles.input}placeholder="Detalles" value={userState.detalles} onChangeText={text => setUserState({ ...userState, detalles: text })}/>

            <Text>
                Una vez reservada la clase tendras que esperar la confirmacion por parte del profesor. 
                Una vez confirmada, por mail, se te enviara un link donde podran ir a un chat para organizar de forma facil el encuentro.
            </Text>

            <CustomButton text={'Reservar'} onPress={ReservarBoton}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
  });

export default ReservarClase;