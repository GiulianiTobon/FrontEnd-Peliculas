import React from 'react'
import TRProductora from './TRProductora'

export default function Tabla({productoras = []}) {
  return (
    <div className='Container'>
            <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Estado</th>
                            <th scope='col'>Fecha de Creación</th>
                            <th scope='col'>Slogan</th>
                            <th scope='col'>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            productoras.map((productora, index) => {
                                return(
                                    <TRProductora productora={productora} key={index} index={index}/>
                                )
                            })
                        }
                    </tbody>
                </table>
        </div>
  )
}
