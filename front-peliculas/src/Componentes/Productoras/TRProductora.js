import dayjs from 'dayjs'
import React from 'react'

export default function TRProductora({productora, index}) {
  return (
    <tr key={index + 1}>
      <th scope="row">{index + 1}</th>
        <td>{productora.nombre}</td>
        <td>
            <div className="form-check form-switch" >
            {productora.estado === "Activo" ? "Activo" : "Inactivo"}
            </div>
        </td>
        <td>{dayjs(productora.fechaCreacion).format("YYYY/MM/DD")}</td>
        <td>{productora.Slogan}</td>
        <td>{productora.descripcion}</td>
      
    </tr>
  )
}
