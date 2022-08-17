import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import DropDown from '../components/DropDown';
import CustomLogo from '../components/CustomLogo';
import ProfesoresList from '../components/ProfesoresList';

const Home = () => {
    const [profesores, setProfesores] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:3000/teachers", {
        method : 'GET',
        //Authorization: "Bearer " + dsffdsfddsf
        })
        .then(response => response.json())
        .then(data => setProfesores(data));
    },[]);

    return (
        <View>
            <CustomLogo onPress={() => navigation.navigate('Main')}/>
            <DropDown update={setProfesores}/>

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
        justifyContent: 'center',
    },
});

export default Home;