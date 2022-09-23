import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import DropDown from '../components/DropDown';
import CustomLogo from '../components/CustomLogo';
import ProfesoresList from '../components/ProfesoresList';
import { GetProfesores } from '../Services/TuProfesorService';
import { GetProfesorByMateria, GetMaterias } from '../Services/TuProfesorService';
import Checkbox from 'react-native-modest-checkbox';

const Home = () => {
    const [profesores, setProfesores] = useState([]);
    const [materias, setMaterias] = useState([]);

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

    const setearProf = () => [
        GetProfesorByMateria(materia).then(res => {
            setProfesores(res);
          }).catch(err => {
            console.log(err);
          })
    ]

    return (
        <View>
            <DropDown data={materias}/>

            <Checkbox
                label='Text for checkbox'
                onChange={(checked) => console.log('Checked!')}
            />


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