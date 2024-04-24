import dayjs from 'dayjs'
import React from 'react'
import TRMedia from './TRMedia'

export default function Tabla({medias =  [], opcion}) {

    var auxMedias = opcion === "Todo" ? medias:medias.filter((media) => media.tipo === opcion )
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Sipnosis</th>
                    <th scope='col'>IMG</th>
                    <th scope='col'>Tipo</th>                    
                    <th scope='col'>Genero</th>
                    <th scope='col'>Año de Estreno</th>
                    <th scope='col'>Director</th>
                    <th scope='col'>Productora</th>
                    <th scope='col'>Fecha Actualización</th>
                    
                </tr>
            </thead>
            <tbody>
                {   
                    auxMedias.map((media, index) => {
                        return(
                            <TRMedia  media = {media} index={index}/>
                        )
                    })
                }
            </tbody>

        </table>
    )
}
