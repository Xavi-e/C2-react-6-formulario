import { useState } from 'react';
import { DatosAcceso } from './componentes/DatosAcceso';
import { DatosPersonales } from './componentes/DatosPersonales';
import { Login } from './componentes/Login';

function App() {
  const [paso, setPaso] = useState(1);
  const [datosPersonales, setDatosPersonales] = useState({
    nombre: "",
    apellidos: "",
    fechaNacimiento: "",
    email: "",
  });
  const [datosAcceso, setDatosAcceso] = useState({
    usuario: "",
    contraseña: "",
    recordarContrasseña: true,
  });
  const [datosRegistro, setDatosRegistro] = useState({
    usuario: "",
    contraseña: "",
    repiteContraseña: "",
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
        <DatosPersonales />
        <DatosAcceso />
        <Login />
      </div>

    </>

  )
}

export default App;
