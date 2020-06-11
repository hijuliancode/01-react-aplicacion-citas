import React, { Fragment } from 'react'

const Formulario = () => {
  return (
    <Fragment>
      <h2>Crear cita</h2>
      <form>
        <label>Nombre mascota:</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
        />
        <label>Nombre propietario:</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre propietario"
        />
        <label>Fecha:</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
        />
        <label>Hora:</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
        />
        <label>Sintomas:</label>
        <textarea
          name="sintomas"
          className="u-full-width"></textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
          >Agregar cita</button>
      </form>
    </Fragment>
  );
}
 
export default Formulario;