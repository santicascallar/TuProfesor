import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDown = () => {
    
    /*const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Matematica', value: 'matematica'},
        {label: 'Lengua', value: 'lengua'}
    ]);*/
  return (
    <View>
        <DropDownPicker
          items={[
              {label: 'English', value: 'en'},
              {label: 'Deutsch', value: 'de'},
              {label: 'French', value: 'fr'},
          ]}
          defaultIndex={0}
          dropdownStyle={{height: 40}}
          onChangeItem={item => console.log(item.label, item.value)}
      />  
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