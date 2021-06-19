import PropTypes from "prop-types";

export const Resumen = (props) => {
    const { retrocedePaso } = props;
    return (
        <>
            <h1>Resumen</h1>
            <p>e</p>
            <button type="button" className="btn btn-dark btn-sm"
                onClick={retrocedePaso}>Anterior</button>
        </>
    )
};

Resumen.propTypes = {
    retrocedePaso: PropTypes.func.isRequired,
}