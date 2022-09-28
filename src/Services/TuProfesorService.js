import axiosClient from "./TuProfesorClient";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getVerificacion = async (userState) => {  
  return axiosClient
      .post(`/teachers/login`,{
        email: userState.email,
        password: userState.password,
      })
      .then((res) => {
        console.log(res.data.token)
        return res.data.token
      })
      .catch((e) => {
        throw "Error 401"
      });
};

export const ProfesorRegister = async (userState) => {
  console.log(userState);
  axiosClient
  .post(`/teachers/register`, {
      email: userState.email,
      password: userState.password,
      nombre: userState.nombre,
      apellido: userState.apellido,
      borndate: userState.borndate,
      ubicacion: userState.ubicacion,
      telefono: userState.telefono,
      activo:1, 
      disponibilidad: userState.disponibilidad,
      tipo: userState.tipo,
  })
  .then((response) => {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 };

 export const AlumnoRegister = async (userState) => {
  console.log(userState);
  axiosClient
  .post(`/students/register`, {
      email: userState.email,
      password: userState.password,
      nombre: userState.nombre,
      apellido: userState.apellido,
      ubicacion: userState.ubicacion,
      telefono: userState.telefono,
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
  export const Profesorlogin = async (userState) => {
    
    console.log(userState);
    return axiosClient
      .post(`/teachers/login`, 
      {...userState})
      .then(async(res) => {
        console.log(res.data);
        console.log(res.data.length);
        if(res.data.length){
          let userToken = res.data.token; // poner punto (nombe que viene del back)
          let userId = res.data.id
          const idValue = JSON.stringify(userId) // lo pasa a string
          await AsyncStorage.setItem('token', userToken) // guarda en el storage con el nombre token 
          await AsyncStorage.setItem('id', idValue) // guarda en el storage con el nombre id
        }
        else {
          console.log("no entro")
        } 
      })
      .catch(() => {
        console.log(`login error`);
      });

   };

  export const Alumnologin = async (userState) => {
    
    console.log(userState);
    return axiosClient
      .post(`/students/login`, 
      {...userState})
      .then(async(res) => {
        console.log(res.data);
        console.log(res.data.length);
        if(res.data.length){
          let userToken = res.data.token; // poner punto (nombe que viene del back)
          let userId = res.data.id
          const idValue = JSON.stringify(userId) // lo pasa a string
          await AsyncStorage.setItem('token', userToken) // guarda en el storage con el nombre token 
          await AsyncStorage.setItem('id', idValue) // guarda en el storage con el nombre id
        } 
        else {
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
      .get(`/teachers/activos`/*, {
        headers: {'Authorization': 'Bearer ' + tokenId}}*/)
      .then((res) => { // si status code entre 200 y 299
        console.log("si")
        const profesores = res.data;
        console.log({
          profesores: res.data});
        return profesores;
      })
      .catch((err) => { // status >= 300
        console.log('no')
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
            }*/)
            .then((res) => { // si status code entre 200 y 299
            console.log({materias: res.data});
            return res.data
            //const materias = res.data;
            //return materias
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

    export const ClaseReservar = async (peticion) => {
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

  
