import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

const main = () => {
    return (
        <View>
            <Image 
                style = {styles.logo}
                source={require('../src/imgs/logo.png')}>
            </Image>

            <Button
                title="Go somewhere"
                onPress={() => {
                // Navigate using the `navigation` prop that you received
                navigation.navigate('SomeScreen');
            }}
    />

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