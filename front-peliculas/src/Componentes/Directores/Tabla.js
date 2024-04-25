import React from 'react'
import TRDirector from './TRDirector'

export default function Tabla({directores = []}) {
    return (
        <div className='Container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Estado</th>
                        <th scope='col'>Fecha de Creación</th>                            
                    </tr>
                </thead>
                <tbody>
                    {   
                        directores.map((director, index) => {
                            return(
                                <TRDirector director={director} key={index} index={index}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
