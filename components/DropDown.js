import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDown = () => {
    
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Matematica', value: 'matematica'},
        {label: 'Lengua', value: 'lengua'}
    ]);

  return (
    <View>
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: 'grey',
        padding: 5,
    },
})

export default DropDown;