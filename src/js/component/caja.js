import React from "react";

const Caja = (props) => {
	return (
        <>
            <div className={props.caja == "simbolo" ? "cajaSimbolo" : "cajaNumero"}>
                <h2 className="text-center">{props.caja == "simbolo" ? <i className="fas fa-clock"></i> : props.numero}</h2>
            </div>
        </>
    );
};

export default Caja;