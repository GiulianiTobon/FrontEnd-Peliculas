import React, { useEffect, useState } from 'react'
import { obtenerGeneros } from '../../Services/GenerosServices'
import Tabla from './Tabla'

export default function Generos() {

    useEffect(() => {
        obtenerTodos()
    }, [])

    const [generos, setGeneros] = useState([])

    const obtenerTodos = async() => {
        try{
            const {data} = await obtenerGeneros()
            setGeneros(data)
            console.log(data)
        }catch(e){
            console.log(e)
        }
    }

    return (
        <Tabla generos={generos}/>
    )
}
