import React, { Fragment, useState } from 'react'
import uuid from 'uuid/dist/v4'

const Formulario = ({crearCita}) => {
  const [cita, setCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  })
  const [error, setError] = useState(false)
  // Se ejecuta cada que el usuario escribe en un input
  const handleChange = e => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }
  // Extraer valores de cita
  const { mascota, propietario, fecha, hora, sintomas } = cita

  // Cuando el usuario envía el formulario
  const submitCita = e => {
    e.preventDefault()

    // 01 Validar
    if ( mascota.trim() === '' ||
         propietario.trim() === '' ||
         fecha.trim() === '' ||
         hora.trim() === '' ||
         sintomas.trim() === '') {
      setError(true)
      return;
    }

    // Eliminar el mensaje de error
    setError(false)

    // 02 Asignar Id/Key
    cita.id = uuid()
    console.log(cita)

    // 03 Crear cita
    crearCita(cita)

    // 04 Reiniciar el Form
    setCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    })

  }
  return (
    <Fragment>
      <h2>Crear cita</h2>
      { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }
      <form
        onSubmit={submitCita}
        >
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
