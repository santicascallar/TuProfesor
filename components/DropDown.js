import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { useState } from 'react';

const DropDown = () => {
    
    /*const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Matematica', value: 'matematica'},
        {label: 'Lengua', value: 'lengua'}
    ]);
    */
  return (
    <View>
        <ModalDropdown options={['matematica', 'lengua']}/>
    </View>
  );
}

const styles = StyleSheet.create({
    dropdown: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
        padding: 8,
      },
})

export default DropDown;