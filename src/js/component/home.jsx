import React from "react";
import Caja from "../component/caja.js";

// <Caja numero = {props.contador} caja = "simbolo" />

const Home = (props) => {
	return (
		<><h1>hola</h1>
			<div className="miFila">
				<div className="cajaSimbolo">
            	    <h2 className="text-center"><i class="fas fa-clock"></i></h2>
        	    </div>
				<div className="cajaNumero">
            	    <h2 className="text-center">65{props.contador}</h2>
        	    </div>
				<div className="cajaNumero">
            	    <h2 className="text-center">876{props.contador}</h2>
        	    </div>
				<div className="cajaNumero">
            	    <h2 className="text-center">87{props.contador}</h2>
        	    </div>
			</div>
		</>
	);
};

export default Caja;
