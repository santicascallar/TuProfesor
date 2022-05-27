
export const getAll=(setCont)=> {
    fetch('http://templateapiort.azurewebsites.net/api/persona/')
    .then(resp => resp.json())
    .then(respJson => setCont(respJson))
    .catch(err=> console.log("Error:" , err))
}
    
    export const getProfesor=()=> {
        fetch('http://templateapiort.azurewebsites.net/api/profesor/', {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify({})
        })
        .then(resp => console.log("OK:", resp))
        .catch(err=> console.log("Error in GET:" , err))
    }