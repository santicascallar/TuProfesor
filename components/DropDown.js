import React from 'react'
import { useEffect, useState } from 'react';
import SelectList from 'react-native-dropdown-select-list'

const DropDown = () => {

  const [selected, setSelected] = useState("");
  const [data,setData] = useState([]);
  
  useEffect(() =>{
    fetch("http://localhost:3000/materias", {
    method : 'GET',
    })
    .then((response) => {
        // Store Values in Temporary Array
        let newArray = response.data.map((item) => {
            return {key: item.id, value: item.name}
          })
          //Set Data Variable
          setData(newArray)
    })
    .catch((e) => {
        console.log(e)
      }) 
},[]);

  return(
    <SelectList setSelected={setSelected} data={data} onSelect={() => alert(selected)} />
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