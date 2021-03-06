import PropTypes from "prop-types";

export const Login = (props) => {

    const { datosAcceso, avanzaPaso, retrocedePaso } = props;


    return (
        <div className="col-7 justify-content-center">
            <h2>Login</h2>
            <form className="row login align-items-center">
                <div className="col-12 justify-content-center">
                    <label className="col-12">Nombre de usuario:</label>
                    <input
                        type="text"
                        className="col-12"
                        placeholder="Nombre de Usuario"
                        required />

                </div>
                <div className="col-12">
                    <label className="col-12">Contraseña:</label>
                    <input
                        type="text"
                        className="col-12"
                        placeholder="Contraseña"
                        required />

                </div>
                <div className="col-12">
                    <div className="d-flex align-items-center justify-content-between botones">
                        <label>Recordar contraseña:</label >
                        <input
                            type="checkbox"
                            className="" />
                    </div>

                </div>
                <div className="col-12 botones">

                    <span className="d-flex flex-row justify-content-between">
                        <button type="button" className="btn btn-dark btn-sm "
                            onClick={retrocedePaso}>Anterior</button>
                        <button type="submit" className="btn btn-dark btn-sm "
                            onClick={avanzaPaso}>Enviar</button>
                    </span>
                </div>
            </form>
        </div>
    );
};

Login.propTypes = {
    avanzaPaso: PropTypes.func.isRequired,
    datosAcceso: PropTypes.shape({
        usuario: PropTypes.string.isRequired,
        contraseña: PropTypes.string.isRequired,
        recordarContraseña: PropTypes.bool.isRequired,

    }).isRequired,
};