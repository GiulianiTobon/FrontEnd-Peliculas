import dayjs from 'dayjs'
import React from 'react'

export default function TRMedia({media, index}) {
    return (
        <tr key={index+1}>
            <th scope='row'>{index+1}</th>
                <td>{media.Titulo}</td>
                <td>{media.Sinopsis}</td>
                <td>{media.image}</td>
                <td>{media.nombreTipo}</td>
                <td>{media.nombreGenero}</td>
                <td>{dayjs(media.AnnoEstreno).format('YYYY/MM/DD')}</td>
                <td>{media.nombreDirector}</td>
                <td>{media.nombreProductora}</td>
                <td>{dayjs(media.fechaActualizacion).format('YYYY/MM/DD')}</td>
        </tr>
    )
}
