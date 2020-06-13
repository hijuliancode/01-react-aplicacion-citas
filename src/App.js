import React, { Fragment, useState } from 'react';
import Formulario from "./components/Formulario";

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
  return (
    <Fragment>
      <h2>Administrador de pacientes</h2>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">b</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
