import React, { useEffect, useState } from 'react'
import { obtenerProductoras } from '../../Services/ProductorasServices'
import Tabla from './Tabla'

export default function Productoras() {

    useEffect(() => {
        obtenerTodos()
    }, [])

    const [productoras, setProductoras] = useState([])

    const obtenerTodos = async() => {
        try{
            const {data} = await obtenerProductoras()
            setProductoras(data)
            console.log(data)
        }catch(e){
            console.log(e)
        }
    }

    return (
        <Tabla productoras={productoras}/>
    )
  
}
