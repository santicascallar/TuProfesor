import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView, CheckBox } from 'react-native';
import DropDown from '../components/DropDown';
import CustomLogo from '../components/CustomLogo';
import ProfesoresList from '../components/ProfesoresList';
import { GetProfesores } from '../Services/TuProfesorService';
import { GetProfesorByTipo } from '../Services/TuProfesorService';
import { GetProfesorByMateria, GetMaterias } from '../Services/TuProfesorService';
//import { Checkbox } from 'react-native-paper';
import { useContextState } from '../../contextState';

const Home = () => {
    const [profesores, setProfesores] = useState([]);
    const [materias, setMaterias] = useState([]);
    const [checkedPresencial, setCheckedPresencial] = useState(false);
    const [checkedVirtual, setCheckedVirtual] = useState(false);

    const {contextState, setContextState}= useContextState();

    useEffect(() =>{
        GetProfesores().then(data => setProfesores(data));
        
        GetMaterias().then(data => {
            setMaterias(data.map(item => {
                return {
                    key: item.id,
                    value: item.Materia
                }
            }))
            console.log({dataMaterias: data})
            console.log(materias)
          
          });
    } ,[]);

    /*useEffect(() => {
        if(!contextState.token){ 
          console.log('No hay token');
          navigation.navigate("LogIn")  //Si no hay token en el contexto, te manda a la pantalla de login
        }
        else{
          console.log("HAY TOKEN")
        }
    })*/

    const setearProf = (materia) => [
        GetProfesorByMateria(materia).then(res => {
            setProfesores(res);
          }).catch(err => {
            console.log(err);
          })
    ]

    const presencial = async () => {
        setCheckedPresencial();
        GetProfesorByTipo(1).then(res => {
            setProfesores(res);
        }).catch(err => {
            console.log(err);
        })
        console.log("presencial");
    }

    return (
        <View>
            <DropDown data={materias} update={setearProf}/>
            
            <View style={styles.container}>
            <Text>Presencial</Text>
            <CheckBox
                value={checkedPresencial}
                onValueChange={presencial}
            />

            <Text>Virtual</Text>
            <CheckBox
                value={checkedVirtual}
                onValueChange={setCheckedVirtual}
            />
            </View>

            {/*<FlatList
                data={edificio}
                renderItem={({ item }) => <EdificiosListItem key={item.direccion} edificio={item} />}
                 keyExtractor={item => item.direccion}
            />*/}

            <View style={styles.container}>
                <FlatList
                    data={profesores}
                    keyExtractor={ (item) => item.id}
                    renderItem = {({item}) => <ProfesoresList key={item.id} profesores={item} />
                }
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Home;