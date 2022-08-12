import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomButton from '../components/CustomButton';
import CustomLogo from '../components/CustomLogo';

const Main = () => {

    const navigation = useNavigation();
    return (
        <View style = {styles.container}>
            <CustomLogo/>
            <Image 
                style = {styles.logo}
                source={require("../src/imgs/logo3.png")}/>

            <Text>Tu Profesor</Text>

            <CustomButton text={'Iniciar sesion como Alumno'} onPress={() => navigation.navigate('LogIn')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
  });

export default Main;