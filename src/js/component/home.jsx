import React from "react";
import Caja from "../component/caja.js";

const Home = (props) => {
	return (
		<>
		<Caja numero = "1" caja = "simbolo" />
		<div className="miFila">
				<Caja numero = "1" caja = "simbolo" />
				<Caja numero = {props.contador} caja = "simbolo" />
				<Caja numero = "2" caja = "numero" />
		</div>
		</>
	);
};

export default Caja;
