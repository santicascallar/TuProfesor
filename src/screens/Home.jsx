import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import DropDown from '../components/DropDown';
import CustomLogo from '../components/CustomLogo';
import ProfesoresList from '../components/ProfesoresList';
import { GetProfesores } from '../Services/TuProfesorService';
import { GetProfesorByMateria } from '../Services/TuProfesorService';

const Home = () => {
    const [profesores, setProfesores] = useState([]);

    useEffect(() =>{
        GetProfesores().then(data => setProfesores(data));
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
            <DropDown update={setearProf} 
            profesores={profesores}/>

            <Text>Lista de Profesores</Text>

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