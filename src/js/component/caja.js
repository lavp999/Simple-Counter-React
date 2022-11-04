import React from "react";

const Caja = (props) => {
	return (
        <>
			<div className={props.caja == "simbolo" ? "cajaSimbolo" : "cajaNumero"}>
                <h2 className="text-center">wq{props.numero}</h2>
            </div>
        </>
    );
};

export default Caja;