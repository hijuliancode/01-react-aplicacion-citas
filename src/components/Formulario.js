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
  const handleChange = () => {
    console.log('Escribiendo...');
    
  }
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
        />
        <label>Nombre propietario:</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre propietario"
          onChange={handleChange}
        />
        <label>Fecha:</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
        />
        <label>Hora:</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
        />
        <label>Sintomas:</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={handleChange}></textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
          >Agregar cita</button>
      </form>
    </Fragment>
  );
}
 
export default Formulario;
