import React, { useEffect, useState } from 'react'
import { obtenerDirectores } from '../../Services/DirectoresService'
import Tabla from './Tabla'



export default function Directores() {
    
    
    useEffect(() => {
        obtenerTodos()
    }, [])

    const [directores, setDirectores] = useState([])

    const obtenerTodos = async() => {
        try{
            const {data} = await obtenerDirectores()
            setDirectores(data)
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }

    return (
    
    <Tabla directores = {directores} />
  )
}
