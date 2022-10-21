import axiosClient from "./TuProfesorClient";
import { useContextState } from "../../contextState";

export const getVerificacion = async (userState) => {  
  console.log(userState)
  return axiosClient
      .post(`/teachers/login`,{
         ...userState
      })
      .then((res) => {
        console.log(res.data)
        return res.data
      })
      .catch((e) => {
        throw "Error"
      });
};

export const ProfesorRegister = async (userState) => {
  console.log(userState);
  const res = await axiosClient.post(`/teachers/register`, {...userState})
  console.log(res)
  return res
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
  /*export const Profesorlogin = async (userState) => {
    
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
   */

  export const Alumnologin = async (userState) => {
    console.log(userState)
    return axiosClient
      .post(`/students/login`,{
         ...userState
      })
      .then((res) => {
        console.log(res.data)
        return res.data
      })
      .catch((e) => {
        throw "Error"
      });

   };
  
  //
  //    LOGIN
  //

  export const GetProfesores = async () => {
    
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
        return axiosClient
            .post(`/peticiones`,{
              ...peticion
           }).then((res) => { 
              console.log(res)
            })
            .catch((err) => { // status >= 300
            console.log(`error `, err.response);
            throw err //propagar error
        }); // => Promise<AxiosResponse>
    }

    export const GetProfesorByTipo = async (tipo) => {
      return axiosClient
          .get(`/teachers?tipo=${tipo}`/*, {
          headers: {'Authorization': 'Bearer ' + tokenId}
          }*/)
          .then((res) => { // si status code entre 200 y 299
          const profesor = res.data;
          return profesor
          })
          .catch((err) => { // status >= 300
          console.log(`error `, err.response);
          throw err //propagar error
      }); // => Promise<AxiosResponse>
    };

    export const getPeticionesbyProfesor = async (id) => {
      return axiosClient
          .get(`/teachers/peticion/${id}`)
          .then((res) => {
          const peticiones = res.data;
          for(let i = 0; i < peticiones.length; i++){
            if(peticiones[i].Estado == 1){
              peticiones[i].estadoPeticion = "Pendiente"
            }
            else if(peticiones[i].Estado == 2){
              peticiones[i].estadoPeticion = "Aceptada"
            }
            else{
              peticiones[i].estadoPeticion = "Rechazada"
            }
          }
          console.log(peticiones)
          return peticiones
          })
          .catch((err) => {
          console.log(`error `, err.response);
          throw err 
      });
    }

    export const getPeticionesbyAlumno = async (id) => {
      return axiosClient
          .get(`/students/peticion/${id}`)
          .then((res) => {
          const peticiones = res.data;
          for(let i = 0; i < peticiones.length; i++){
            if(peticiones[i].Estado == 1){
              peticiones[i].estadoPeticion = "Pendiente"
            }
            else if(peticiones[i].Estado == 2){
              peticiones[i].estadoPeticion = "Aceptada"
            }
            else{
              peticiones[i].estadoPeticion = "Rechazada"
            }
          }
          console.log(peticiones)
          return peticiones
          })
          .catch((err) => {
          console.log(`error `, err.response);
          throw err 
      });
    }

    export const updatePeticion = async (id, estado) => {
      console.log(estado)
      return axiosClient
          .put(`/peticiones/${id}`,{
            Estado: estado
         })
          .then((res) => {
          const peticion = res.data;

          return peticion
          })
          .catch((err) => {
          console.log(`error `, err.response);
          throw err  
      });
    }

    export const getPeticion = async (id,cb) => {
      return axiosClient
          .get(`/peticiones/id/${id}`)
          .then((res) => {
              const peticiones = res.data;
              for(let i = 0; i < peticiones.length; i++){
                if(peticiones[i].Estado == 1){
                  peticiones[i].estadoPeticion = "Pendiente"
                }
                else if(peticiones[i].Estado == 2){
                  peticiones[i].estadoPeticion = "Aceptada"
                }
                else{
                  peticiones[i].estadoPeticion = "Rechazada"
                }
              }
              console.log(peticiones)
              cb(peticiones[0])
          })
          .catch((err) => {
          console.log(`error `, err.response);
          throw err 
      });
    }

  export const AgregarMaterias = async (mail, mat) => {
    const profesor=await ProfesorByMail(mail)
    console.log(profesor)
    const res = await axiosClient.post(`/teachers/materias/${profesor[0].id}`, {materia:mat})
    return res.data
  }

  export const ProfesorByMail = async (mail) => {
    const profesor = await axiosClient.get(`/teachers/mail/${mail}`) // si status code entre 200 y 299
    return profesor.data
  }