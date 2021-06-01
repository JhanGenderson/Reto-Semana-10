import axios from 'axios'

const URL="https://60b2f448e0275c0017bfc898.mockapi.io/Productos"

const obtenerPlatos = async()=>{
    try {
        let respuesta = await axios.get(URL)
        console.log(respuesta)
    } catch (error) {
        console.log(error)
    }
}

export{
    obtenerPlatos
}