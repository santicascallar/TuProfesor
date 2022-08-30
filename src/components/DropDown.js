import React from 'react'
import { useEffect, useState } from 'react';
import SelectList from 'react-native-dropdown-select-list'
import { StyleSheet } from 'react-native';
import { GetMaterias } from '../Services/TuProfesorService';
import { GetProfesorByMateria } from '../Services/TuProfesorService';

const DropDown = (props) => {

  const [selected, setSelected] = useState("");
  const [materias,setMaterias] = useState([]);
  

  useEffect(() =>{
    GetMaterias().then((data) => setMaterias(data))
    .catch((err) => {
      console.log(err)
    })},[])

  return(
    <SelectList setSelected={setSelected} data={materias} onSelect={() => {
      alert(selected)
      /*
      GetProfesorByMateria(selected).then(res => {
        props.update(res);
      }).catch(err => {
        console.log(err);
      })
      */
     props.update(selected)
    } } />
  )
}



/*const styles = StyleSheet.create({
  dropdown: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 10,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
})*/

export default DropDown;