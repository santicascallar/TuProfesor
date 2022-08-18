import React from 'react'
import { useEffect, useState } from 'react';
import SelectList from 'react-native-dropdown-select-list'
import { StyleSheet } from 'react-native';
import { GetMaterias } from '../Services/TuProfesorService';
const DropDown = (props) => {

  const [selected, setSelected] = useState("");
  const [materias,setMaterias] = useState([]);
  
  useEffect(() =>{
    GetMaterias().then(res => {
      setMaterias(res);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setSelected(materias[0]);
    }
    );
  } , []);


  return(
    <SelectList setSelected={setSelected} data={materias} onSelect={() => {
      
      alert(selected)
      fetch("http://localhost:3000/teachers?idMateria="+selected, {
        method : 'GET',
        //Authorization: "Bearer " + dsffdsfddsf
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          props.update(data)
    
        });

      }} />
  )
}

const styles = StyleSheet.create({
  dropdown: {
      
    },
})
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