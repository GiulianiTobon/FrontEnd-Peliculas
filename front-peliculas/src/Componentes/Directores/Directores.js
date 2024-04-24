import React, { useEffect, useState } from 'react'
import { obtenerDirectores } from '../../Services/DirectoresService'
import dayjs from 'dayjs'



export default function Directores() {
    
    
    useEffect(() => {
        obtenerTodos()
    }, [])

    const [director, setDirectores] = useState([])

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
    
    <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Estado</th>
                    <th scope='col'>Fecha de Creación</th>
                    <th scope='col'>Fecha Actualización</th>
                </tr>
            </thead>
            <tbody>
                {   
                    director.map((director, index) => {
                        return(
                            <tr>
                                <th scope='row'>{index+1}</th>
                                    <td>{director.Nombre}</td>
                                    <td>{director.Estado}</td>
                                    <td>{dayjs(director.fechaCreacion).format('YYYY/MM/DD')}</td>
                                    <td>{dayjs(director.fechaActualizacion).format('YYYY/MM/DD')}</td>
                                    <td>
                                        <div className='form-check form-switch'>
                                            {director.Estado ? 'Activo' : 'Inactivo '}
                                        </div>
                                    </td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
  )
}
