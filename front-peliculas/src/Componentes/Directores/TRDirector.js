import dayjs from "dayjs";
import React from "react";

export default function TRDirector({director, index}) {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{director.nombre}</td>
      <div className="form-check form-switch">
        <td>{director.Estado === "Activo" ? "Activo" : "Inactivo"}</td>
      </div>
      <td>{dayjs(director.fechaCreacion).format("YYYY/MM/DD")}</td>
    </tr>
  );
}
