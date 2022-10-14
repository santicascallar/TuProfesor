import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, TextInput, CheckBox } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from 'react';
import CustomButton from '../../components/CustomButton';
import CustomLogo from '../../components/CustomLogo';
import { ProfesorRegister } from '../../Services/TuProfesorService';
import { GetMaterias } from '../../Services/TuProfesorService';

const RegisterProfesor = () => {

    const navigation = useNavigation();
    const [materias, setMaterias] = useState([]);

    const [materia1, setMateria1] = useState(false);
    const [materia2, setMateria2] = useState(false);
    const [materia3, setMateria3] = useState(false);
    const [materia4, setMateria4] = useState(false);
    const [materia5, setMateria5] = useState(false);
    const [materia6, setMateria6] = useState(false);


    const [userState, setUserState] = useState({
      borndate:"2022-08-09",
      email:"",
      password:"",
      nombre:"",
      apellido:"",
      tipo:"",
      telefono:"",
      ubicacion:"",
    });

    
    
    const RegisterBoton = async () => {
      if (!userState.email || !userState.password || !userState.nombre || !userState.apellido || !userState.ubicacion || !userState.telefono || !userState.borndate || !userState.tipo) {
        console.log("Llenar todos los datos");
      } 
      else {
        await ProfesorRegister(userState).then(() => {
        navigation.navigate('Main');
        });
      }
    }

    useEffect(() =>{
      GetMaterias().then(materias => {
        setMaterias(materias.map(item => {
              return {
                  key: item.id,
                  value: item.Materia
              }
          }))
          console.log({materias})
        });
    } ,[]);

    const materiasEleccion = async () => {

      if(materia1 == true){
            materias = materias.filter(function(item){
              return item.id == 1;
           }).map(function({Materia}){
               return Materia;
           })
      }
      else if(materia2 == true){
        materias = materias.filter(function(item){
          return item.id == 2;
        }).map(function({Materia}){
           return Materia;
       })
      }
      else if(materia3 == true){
        materias = materias.filter(function(item){
          return item.id == 3;
        }).map(function({Materia}){
           return Materia;
       })
      }
      else if(materia4 == true){
        materias = materias.filter(function(item){
          return item.id == 4;
        }).map(function({Materia}){
           return Materia;
       })
      }
      else if(materia5 == true){
        materias = materias.filter(function(item){
          return item.id == 5;
        }).map(function({Materia}){
           return Materia;
       })
      }
      else if(materia6 == true){
        materias = materias.filter(function(item){
          return item.id == 6;
        }).map(function({Materia}){
           return Materia;
       })
      }
  }

    return (
        <View style = {styles.container}>
            <CustomLogo onPress={() => navigation.navigate('Main')}/>
            <Text>Registrarse como Profesor</Text>
            
            <TextInput style={styles.input} placeholder="Email" value={userState.email} onChangeText={text => setUserState({ ...userState, email: text })}/>
            <TextInput style={styles.input} placeholder="Contraseña" seguridadPassword={true} value={userState.password} onChangeText={text => setUserState({ ...userState, password: text })}/>
            <TextInput style={styles.input} placeholder="Nombre" value={userState.nombre} onChangeText={text => setUserState({ ...userState, nombre: text })}/>
            <TextInput style={styles.input} placeholder="Apellido" value={userState.apellido} onChangeText={text => setUserState({ ...userState, apellido: text })}/>
            <TextInput style={styles.input} placeholder="Telefono" value={userState.telefono} onChangeText={text => setUserState({ ...userState, telefono: text })}/>
            <TextInput style={styles.input} placeholder="Ubicacion" value={userState.ubicacion} onChangeText={text => setUserState({ ...userState, ubicacion: text })}/>
            <TextInput style={styles.input} placeholder="Tipo" value={userState.tipo} onChangeText={text => setUserState({ ...userState, tipo: text })}/>
            <TextInput style={styles.input} placeholder="Fecha de Nacimiento" value={userState.borndate} onChangeText={text => setUserState({ ...userState, borndate: text })}/>

            {/* CheckBox de Materias */}
            <Text>Matematica</Text>
            <CheckBox
                value={materia1}
                onValueChange={setMateria1}
            />
            <Text>Programacion</Text>
            <CheckBox
                value={materia2}
                onValueChange={setMateria2}
            />
            <Text>Lengua</Text>
            <CheckBox
                value={materia3}
                onValueChange={setMateria3}
            />
            <Text>Historia</Text>
            <CheckBox
                value={materia4}
                onValueChange={setMateria4}
            />
            <Text>Ingles</Text>
            <CheckBox
                value={materia5}
                onValueChange={setMateria5}
            />
            <Text>Programacion</Text>
            <CheckBox
                value={materia6}
                onValueChange={setMateria6}
            />
            <CustomButton text={'Aceptar'} onPress={materiasEleccion}/>
            
            <CustomButton text={'Registrarse'} onPress={RegisterBoton}/>
        </View>
    )
    //FALTAN LOS QUE NO SE HACEN CON TEXTINPUT
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1
    },
    input:{
      backgroundColor: 'white',
      borderColor: 'black',
      borderRadius: 5, //lo curva del borde
      paddingHorizontal: 10,
      marginVertical: 5,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10
    }
  });

export default RegisterProfesor;