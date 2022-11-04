import React from "react";
// <div className={props.caja == "simbolo" ? "cajaSimbolo" : "cajaNumero"}>

const Caja = (props) => {
	return (
        <>
			<div className="cajaNumero">
                <h2 className="text-center">wq{props.numero}</h2>
            </div>
        </>
    );
};

export default Caja;