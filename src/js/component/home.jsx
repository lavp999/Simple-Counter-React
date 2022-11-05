import React from "react";
import Caja from "../component/caja.js";

// <Caja numero = {props.contador} caja = "simbolo" />

const Home = (props) => {
	const miNumero = props.contador.toString().padStart(7,"0") + "."; // no lo covertia en cadena
	const ctaAtras = props.cuentaAtras.toString().padStart(7,"0") + "."; // no lo covertia en cadena
	
	function hemosLlegado(){
		if(props.contador == props.avisarEn) alert("Hemos llegado a " + props.avisarEn);
	}

	function iniciar(){  // esto no se puede hacer
		props.contador = 0;
		props.cuentaAtras = 10000000;
	}
	
	function parada(){
	}
	function reanudar(){
	}
	
	return (
		<>
			{hemosLlegado()}
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

			<div className="miFila" role="toolbar" aria-label="Toolbar with button groups">
				<button type="button" className="cajaSimbolo" onClick={iniciar}><i class="fas fa-step-backward"></i></button>
				<button type="button" className="cajaSimbolo" onClick={parada}><i class="fas fa-hand-paper"></i></button>
				<button type="button" className="cajaSimbolo" onClick={reanudar}><i class="fas fa-play"></i></button>
			</div>
		</>
	);
};

export default Home;
