import React from "react";
import {Text, StyleSheet, Pressable, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function CustomCard(props) {
    const {textNombre, textApellido, textMateria, textEdad, img } = props;
    return (
      <SafeAreaView>
        <View style={{flexDirection: 'row'}}>
            <Image
                source={{uri: img}}
                style={styles.imagen}
            />
        </View>
        <View>
            <Text style={{fontSize: 22, fontWeight: '700'}}>{textNombre} {textApellido}</Text>
            <Text style={{fontSize: 15, opacity: .7}}>{textMateria}</Text>
            <Text style={{fontSize: 15, opacity: .7}}>{textEdad} Años</Text>
        </View>
      </SafeAreaView>
    );
  }
  

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        marginBottom: 20,
        borderRadius: 16,
        backgroundColor: 'rgba(255,255,255,0.8)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: .3,
        shadowRadius: 20,
    },
    imagen: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 5,
    },
    text: {
    }
})