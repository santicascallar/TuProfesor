import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView, CheckBox } from 'react-native';
import DropDown from '../../components/DropDown';
import ProfesoresList from '../../components/ProfesoresList';
import { GetProfesores } from '../../Services/TuProfesorService';
import { GetProfesorByTipo } from '../../Services/TuProfesorService';
import { GetProfesorByMateria, GetMaterias } from '../../Services/TuProfesorService';
import { useContextState } from '../../../contextState';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from "@react-navigation/native";

const HomeAlumno = () => {
    const navigation = useNavigation();
    const [profesores, setProfesores] = useState([]);
    const [materias, setMaterias] = useState([]);
    const [checkedPresencial, setCheckedPresencial] = useState(false);
    const [checkedVirtual, setCheckedVirtual] = useState(false);

    const {contextState, setContextState}= useContextState();

    useEffect(() =>{
        console.log(contextState)
        GetProfesores().then(data => setProfesores(data));
        
        GetMaterias().then(data => {
            setMaterias(data.map(item => {
                return {
                    key: item.id,
                    value: item.Materia
                }
            }))
            console.log({dataMaterias: data})
          
          });
    } ,[]);

    useEffect(() => {
        if(!contextState.persona[0].token){ 
          console.log('No hay token');
          navigation.navigate("LogIn")  //Si no hay token en el contexto, te manda a la pantalla de login
        }
        else{
          console.log("HAY TOKEN")
        }
    });

    const setearProf = (materia) => [
        GetProfesorByMateria(materia).then(res => {
            setProfesores(res);
        })
    ]

    const presencialVirtual = async () => {
        if(checkedPresencial == true){
            GetProfesorByTipo(1).then(res => {
                setProfesores(res);
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
            console.log("presencial");
        }
        else if(checkedVirtual == true){
            GetProfesorByTipo(0).then(res => {
                setProfesores(res);
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
            console.log("virtual");
        }
    }

    return (
        <View>
            <DropDown data={materias} update={setearProf}/>
            
            <View style={styles.container}>
            <Text>Presencial</Text>
            <CheckBox
                value={checkedPresencial}
                onValueChange={setCheckedPresencial}
            />

            <Text>Virtual</Text>
            <CheckBox
                value={checkedVirtual}
                onValueChange={setCheckedVirtual}
            />
            <CustomButton text={'Aceptar'} onPress={presencialVirtual}/>
            </View>

            <View style={styles.container}>
                <FlatList
                    data={profesores}
                    keyExtractor={ (item) => item.id}
                    renderItem = {({item}) => <ProfesoresList key={item.id} profesores={item} />
                }
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <CustomButton text={'Mis Peticiones'} onPress={() => navigation.navigate('PerfilAlumno')}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center' 
    }
});

export default HomeAlumno;