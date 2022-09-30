import React from 'react'
import { useEffect, useState } from 'react';
import SelectList from 'react-native-dropdown-select-list'
import { StyleSheet } from 'react-native';

const DropDown = (props) => {

  const [selected, setSelected] = useState("");
  console.log(props.data)
  return(
    <SelectList setSelected={setSelected} data={props.data} onSelect={() => {
      alert(selected)
      props.update(selected)
    } } />
  )
}

const styles = StyleSheet.create({
  dropdown: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 10,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
});

export default DropDown;