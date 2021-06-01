import React, {useState, useEffect} from 'react'
import {obtenerPlatos} from '../Services/platoService'


export default function ListaPlatosView() {
    const [platos,setPlatos] = useState([])

    const getPlatos= async() =>{
        try {
            // Ejecuto la funcion que me devuelve los platos
            const platosObtenidos = await obtenerPlatos()
            
        } catch (error) {
            console.log(error)
        }
    }
useEffect(()=>{
    getPlatos()
}, [])
    
    return (
        <div>
            
        </div>
    )
}
