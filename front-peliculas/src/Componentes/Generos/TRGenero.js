import dayjs from "dayjs";
import React from "react";

export default function TRGenero({genero, index}) {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{genero.nombre}</td>
      <td>{genero.descripcion}</td>
      <td>{dayjs(genero.fechaCreacion).format("YYYY/MM/DD")}</td>
      <td>
        <div className="form-check form-switch">
          {genero.estado === "Activo" ? "Activo" : "Inactivo "}
        </div>
      </td>
    </tr>
  );
}
