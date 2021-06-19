export const DatosPersonales = () => {

    return (
        <div className="col-7 justify-content-center">
            <h2>Datos Personales</h2>
            <form className="row datos-personales align-items-center">
                <div className="col-12 contenedor">
                    <label className="col-12">Nombre:</label>
                    <input
                        type="text"
                        className="col-12  box"
                        placeholder="Nombre"
                        required />
                </div>
                <div className="col-12">
                    <label className="col-12">Apellidos:</label>
                    <input
                        type="text"
                        className="col-12  box"
                        placeholder="Apellidos"
                        required />
                </div>
                <div className="col-12">
                    <label className="col-12">Fecha de nacimiento:</label>
                    <input
                        type="date"
                        className="col-12  box"
                        required />
                </div>
                <div className="col-12">
                    <label className="col-12">Correo electrónico:</label>
                    <input
                        type="text"
                        className="col-12 box"
                        placeholder="example@guapo.es"
                        required />
                </div>
                <div className="col-12 botones">
                    <span className="d-flex flex-row justify-content-end">
                        <button type="button" className="btn btn-dark btn-sm ">Siguiente</button>
                    </span>
                </div>
            </form>
        </div>
    );
};