export const DatosAcceso = () => {

    return (
        <div className="col-7 justify-content-center">
            <h2>Datos de Acceso</h2>
            <form className="row datos-acceso align-items-center">
                <div className="col-12">
                    <label className="col-12">Nombre de usuario:</label>
                    <input
                        type="text"
                        className="col-12 box"
                        placeholder="Nombre de Usuario"
                        required />
                </div>
                <div className="col-12">
                    <label className="col-12">Contraseña:</label>
                    <input
                        type="text"
                        className="col-12  box"
                        placeholder="Contraseña"
                        required />
                </div>
                <div className="col-12">
                    <label className="col-12">Repetir contraseña:</label>
                    <input
                        type="text"
                        className="col-12  box"
                        placeholder="Repetir contraseña"
                        required />
                </div>
                <div className="col-12 botones">
                    <span className="d-flex flex-row justify-content-between">
                        <button type="button" className="btn btn-dark btn-sm">Anterior</button>
                        <button type="button" className="btn btn-dark btn-sm">Siguiente</button>
                    </span>
                </div>
            </form>
        </div>
    );
};