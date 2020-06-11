import React, { Fragment, useState } from 'react'

const Formulario = () => {
  const [cita, setCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  })
  // Se ejecuta cada que el usuario escribe en un input
  const handleChange = e => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }
  // Extraer valores de cita
  const { mascota, propietario, fecha, hora, sintomas } = cita

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
          onChange={handleChange}
          value={mascota}
        />
        <label>Nombre propietario:</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre propietario"
          onChange={handleChange}
          value={propietario}
        />
        <label>Fecha:</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />
        <label>Hora:</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />
        <label>Sintomas:</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={handleChange}
          value={sintomas}
          ></textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
          >Agregar cita</button>
      </form>
    </Fragment>
  );
}

export default Formulario;
