import { useState } from 'react';
import { DatosRegistro } from './componentes/DatosRegistro';
import { DatosPersonales } from './componentes/DatosPersonales';
import { Login } from './componentes/Login';
import { Resumen } from './componentes/Resumen';

function App() {
  const [paso, setPaso] = useState(1);
  const [datosPersonales, setDatosPersonales] = useState({
    nombre: "",
    apellidos: "",
    fechaNacimiento: "",
    email: "",
  });
  const [datosRegistro, setDatosRegistro] = useState({
    usuario: "",
    contraseña: "",
    repiteContraseña: "",
  });
  const [datosAcceso, setDatosAcceso] = useState({
    usuario: "",
    contraseña: "",
    recordarContrasseña: true,
  });


  const avanzaPaso = () => {
    if (paso === 4) {
      return;
    } setPaso(paso + 1);
  };

  const retrocedePaso = () => {
    if (paso === 1) {
      return;
    } setPaso(paso - 1);
  }
  return (
    <>
      <header>
        <h1 className="titulo">FORMULARIO</h1>
      </header>
      <div className="row justify-content-center align-items-center ">
        {paso === 1 && (
          <DatosPersonales
            avanzaPaso={avanzaPaso}
            datosPersonales={datosPersonales}
          />
        )}
        {paso === 2 && (
          <DatosRegistro
            avanzaPaso={avanzaPaso}
            datosRegistro={datosRegistro}
            retrocedePaso={retrocedePaso}
          />
        )}
        {paso === 3 && (
          <Login
            avanzaPaso={avanzaPaso}
            datosAcceso={datosAcceso}
            retrocedePaso={retrocedePaso} />
        )}
        {paso === 4 && <Resumen retrocedePaso={retrocedePaso} />}
      </div>

    </>

  )
}

export default App;
