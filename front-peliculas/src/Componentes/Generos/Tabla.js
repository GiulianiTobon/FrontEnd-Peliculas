import dayjs from 'dayjs'
import React from 'react'
import TRGenero from './TRGenero'

export default function Tabla({generos = []}) {
  return (
        <div>
            <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Descripción</th>
                            <th scope='col'>Fecha de Creación</th>
                            <th scope='col'>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            generos.map((genero, index) => {
                                return(
                                    <TRGenero genero={genero} key={index} index={index}/>
                                )
                            })
                        }
                    </tbody>
                </table>
        </div>
    )
}
