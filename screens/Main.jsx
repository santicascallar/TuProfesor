import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const main = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Image 
                style = {styles.logo}
                source={require('../src/imgs/logo.png')}>
            </Image>

            <TouchableOpacity
                onPress={() => navigation.navigate('logIn')}
            >
                <Text>Iniciar sesion como Alumno</Text>
            </TouchableOpacity>

            <TouchableHighlight
            >
            <Text>Profesor</Text>
            </TouchableHighlight>

        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
      width: 200,
      height: 200,
    },
  });

export default main;