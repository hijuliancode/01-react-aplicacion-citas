import React, { Fragment, useState } from 'react';
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  // Lista de citas
  const [citas, guardarCitas] = useState([])

  // Lee las citas actuales y agrega la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }
  // Elimina una cita por su Id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas)
  }
  return (
    <Fragment>
      <h2>Administrador de pacientes</h2>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {
              citas.map(cita => (
                <Cita
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
