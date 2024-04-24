import React, { useEffect, useState } from 'react'
import { obtenerMedias } from '../../Services/mediasServices'
import Tabla from './Tabla'
import TRMedia from './TRMedia'

export default function Medias() {

    useEffect(() => {
        obtenerTodos()
    }, [])

    const [medias, setMedias] = useState([])
    const [Tipos, setTipos] = useState(false)
    const [opcion, setOptions] = useState()
    const obtenerTodos = async() => {
        try{
            const {data} = await obtenerMedias()
            setMedias(data)
            console.log(data)
        }catch(e){
            console.log(e)
        }
    }

    const handleSelectChange = (event) => {
        console.log("Funcionando"+event.target.value)
        setOptions(event.target.value); // Actualiza el estado con la opción seleccionada
      };

    const renderizarDatos = () => {
        switch (opcion) {
          case '1':
            return (
              <TRMedia />
            );
          case '2':
            return (
              <tr>
                <td>Datos de la opción 2</td>
              </tr>
            );
          case '3':
            return (
              <tr>
                <td>Datos de la opción 3</td>
              </tr>
            );
          default:
            return null;
        }
      };
  return (
    <>
        <select className="form-select" aria-label="Default select example" onChange={handleSelectChange}>
            <option selected>Selecciona</option>
            <option value="Todo">Mostrar todo</option>
            <option value="Peliculas">Peliculas</option>
            <option value="Series">Series</option>
        </select>

        <Tabla medias = {medias} option = {opcion}/>
    </>
  )
}
