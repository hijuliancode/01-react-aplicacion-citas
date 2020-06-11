import React, { Fragment } from 'react';
import Formulario from "./components/Formulario";

function App() {
  return (
    <Fragment>
      <h2>Administrador de pacientes</h2>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">b</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
