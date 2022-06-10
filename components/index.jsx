import React from 'react';
import { Alert, StyleSheet, Text, View, Image, TouchableHighlight, LogBox } from 'react-native';

const index = () => {
    return (
        <View>
            <Text>Tu Profesor</Text>
            
            <Image 
                style = {styles.logo}
                source={require('../src/imgs/logo.png')}>
            </Image>

            <TouchableHighlight
            onPress={onPress}
            >
            <Text>Profesor</Text>
            </TouchableHighlight>

            <TouchableHighlight
            onPress={onPress}
            >
            <Text>Estudiante</Text>
            </TouchableHighlight>

        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
      width: 50,
      height: 50,
    },
  });

export default index;