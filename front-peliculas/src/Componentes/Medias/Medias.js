import React, { useEffect, useState } from 'react'
import { obtenerMedias } from '../../Services/mediasServices'
import Tabla from './Tabla'
import TRMedia from './TRMedia'
import { obtenerTipo } from '../../Services/TiposServices'

export default function Medias() {

    useEffect(() => {
        obtenerTodos()
        obtenerTodosTipos()
    }, [])

    const [medias, setMedias] = useState([])
    const [tipos, setTipos] = useState([])
    const [opcion, setOptions] = useState("Todo")

    const obtenerTodos = async() => {
        try{
            const {data} = await obtenerMedias()
            setMedias(data)
            console.log("estes es el data" , data)
        }catch(e){
            console.log(e)
        }
    }

    const obtenerTodosTipos = async() => {
        try{
            const {data} = await obtenerTipo()
            setTipos(data)
            console.log("estos son los tipos", data)
        }catch(e){
            console.log(e)
        }
    } 

    const handleSelectChange = (event) => {
        setOptions(event.target.value); // Actualiza el estado con la opción seleccionada
      };

  return (
    <>
        <select className="form-select" aria-label="Default select example" onChange={handleSelectChange}>
            <option selected>Selecciona</option>
            <option value="Todo">Mostrar todo</option>
            <option value="Pelicula">Peliculas</option>
            <option value="Serie">Series</option>
        </select>

        <Tabla medias = {medias} opcion = {opcion} tipos = {tipos}/>
    </>
  )
}
