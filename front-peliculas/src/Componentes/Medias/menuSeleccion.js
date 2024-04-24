import React from 'react'

export default function menuSeleccion({option = EventTarget.value}) {
  return (
    <select className="form-select" aria-label="Default select example">
            <option selected>Selecciona</option>
            <option value="1">Mostrar todo</option>
            <option value="2">Peliculas</option>
            <option value="3">Series</option>
    </select>
  )
}
