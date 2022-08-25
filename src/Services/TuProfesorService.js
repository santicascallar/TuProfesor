import axiosClient from "./TuProfesorClient";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const register = async (userState) => {
  console.log(userState);
  axiosClient
  .post(`/users/register`, {
    email: 'Fred',
    password: 'Flintstone',
    tipo: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 };

/*export const register = async (userState) => {
    console.log(userState);
    axiosClient
      .post(`/users/register`, {
        ...userState
      })
      .then((res) => {
        let userInfo = res.data;
      })
      .catch((e) => {
        console.log(`register error`, e.response);
      });
   };
*/
  //
  //    REGISTER
  //

  export const login = async (userState) => {
    
    console.log(userState);
    return axiosClient
      .post(`/users/login`, 
      {...userState})
      .then(async(res) => {
        console.log(res.data);
        console.log(res.data.length);
        if(res.data.length === 1){
          let userToken = res.data.token; // poner punto (nombe que viene del back)
          let userId = res.data.id
          const idValue = JSON.stringify(userId) // lo pasa a string
          await AsyncStorage.setItem('token', userToken) // guarda en el storage con el nombre token 
          await AsyncStorage.setItem('id', idValue) // guarda en el storage con el nombre id
        } else {
          console.log("no entro")
        } 
      })
      .catch(() => {
        console.log(`login error`);
      });

   };
  
  //
  //    LOGIN
  //

  export const GetProfesores = async () => {
    const tokenId = await AsyncStorage.getItem('token')
    const id = await AsyncStorage.getItem('id')
    
    return axiosClient
      .get(`/teachers`/*, {
        headers: {'Authorization': 'Bearer ' + tokenId}}*/)
      .then((res) => { // si status code entre 200 y 299

        const profesores = res.data;
        return profesores;
      })
      .catch((err) => { // status >= 300
        console.log(`error `, err.response);
        throw err //propagar error
      }); // => Promise<AxiosResponse>
   };

  //
  //    GET PROFESORES
  //

    export const GetMaterias = async () => {
        const tokenId = await AsyncStorage.getItem('token')

        return axiosClient
            .get(`/teachers/materias`/*, {
            headers: {'Authorization': 'Bearer ' + tokenId}
            }*/).then((res) => { // si status code entre 200 y 299
            console.log(res.data);
            const materias = res.data;
            
            return materias
            })
            .catch((err) => { // status >= 300
            console.log(`error `, err.response);
            throw err //propagar error
        }); // => Promise<AxiosResponse>
    }
    
    //
    //    GET MATERIAS
    //

    export const GetProfesor = async (id) => {
        const tokenId = await AsyncStorage.getItem('token')
        
        return axiosClient
            .get(`/teachers/id/${id}`/*, {
            headers: {'Authorization': 'Bearer ' + tokenId}
            }*/).then((res) => { // si status code entre 200 y 299
    
            const profesor = res.data;
            
            return profesor
            })
            .catch((err) => { // status >= 300
            console.log(`error `, err.response);
            throw err //propagar error
        }); // => Promise<AxiosResponse>
    }

    //  
    //    GET PROFESOR BY ID
    //

    export const GetProfesorByMateria = async (materia) => {
        const tokenId = await AsyncStorage.getItem('token')
        
        return axiosClient
            .get(`/teachers?materia=${materia}`/*, {
            headers: {'Authorization': 'Bearer ' + tokenId}
            }*/).then((res) => { // si status code entre 200 y 299
    
            const profesor = res.data;
            
            return profesor
            })
            .catch((err) => { // status >= 300
            console.log(`error `, err.response);
            throw err //propagar error
        }); // => Promise<AxiosResponse>
    }

    //
    //    GET PROFESOR BY MATERIA
    //

    export const ReservarClase = async (peticion) => {
        const tokenId = await AsyncStorage.getItem('token')
        const id = await AsyncStorage.getItem('id')

        return axiosClient
            .post(`/teachers/reservar`, {id, peticion}/*, {
            headers: {'Authorization': 'Bearer ' + tokenId}
            }*/).then((res) => { // si status code entre 200 y 299
    
            const profesor = res.data;
            
            return profesor
            })
            .catch((err) => { // status >= 300
            console.log(`error `, err.response);
            throw err //propagar error
        }); // => Promise<AxiosResponse>
    }

  
