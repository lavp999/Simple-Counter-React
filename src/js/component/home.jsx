import React from "react";
import Caja from "../component/caja.js";

const Home = (props) => {
	const miNumero = props.contador.toString().padStart(7,"0") + "."; // no lo covertia en cadena
	const ctaAtras = props.cuentaAtras.toString().padStart(7,"0") + "."; // no lo covertia en cadena
	
	return (
		<>
			<div className="miFila">
				<Caja numero="" caja="simbolo"/>
				<Caja numero={miNumero.slice(0,1)} caja="numero"/>
				<Caja numero={miNumero.slice(1,2)} caja="numero"/>
				<Caja numero={miNumero.slice(2,3)} caja="numero"/>
				<Caja numero={miNumero.slice(3,4)} caja="numero"/>
				<Caja numero={miNumero.slice(4,5)} caja="numero"/>
				<Caja numero={miNumero.slice(5,6)} caja="numero"/>
				<Caja numero={miNumero.slice(6,7)} caja="numero"/>
			</div>

			<div className="miFila">
				<Caja numero="" caja="simbolo"/>
				<Caja numero={ctaAtras.slice(0,1)} caja="numero"/>
				<Caja numero={ctaAtras.slice(1,2)} caja="numero"/>
				<Caja numero={ctaAtras.slice(2,3)} caja="numero"/>
				<Caja numero={ctaAtras.slice(3,4)} caja="numero"/>
				<Caja numero={ctaAtras.slice(4,5)} caja="numero"/>
				<Caja numero={ctaAtras.slice(5,6)} caja="numero"/>
				<Caja numero={ctaAtras.slice(6,7)} caja="numero"/>
			</div>
		</>
	);
};

export default Home;
