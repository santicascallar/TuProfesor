import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'htpp://localhost:5000',
})

/*export const getAllProfesores = async () => {
    return axiosClient.get('/profesores')
    .then(res => {
        if(res.status < 300) return res.data;
        else console.log(`Response with Status Code ${res.status}`);
    })
    .catch(err => {
        console.log(err);
    })
}

export const logIn = async (usuario, contraseña) => {
    return axiosClient.post('/logIn')

    body: {
        
    }

    .then(res => {
        if(res.status < 300) return res.data;
        else console.log(`Response with Status Code ${res.status}`);
    })
    .catch(err => {
        console.log("Error in POST:" , err);
    })
}
*/