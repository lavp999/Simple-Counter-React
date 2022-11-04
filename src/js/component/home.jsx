import React from "react";
import Caja from "../component/caja.js";

// <Caja numero = {props.contador} caja = "simbolo" />

const Home = (props) => {
	return (
		<>
			<div className="miFila">
			<div className="cajaSimbolo">
            	    <h2 className="text-center">wq{props.contador}</h2>
        	    </div>
				<div className="cajaNumero">
            	    <h2 className="text-center">wq{props.contador}</h2>
        	    </div>
				<div className="cajaNumero">
            	    <h2 className="text-center">wq{props.contador}</h2>
        	    </div>
				<div className="cajaNumero">
            	    <h2 className="text-center">wq{props.contador}</h2>
        	    </div>
			</div>
		</>
	);
};

export default Caja;
