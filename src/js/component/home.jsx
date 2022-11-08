import React from "react";
import PropTypes from "prop-types";

import Caja from "../component/caja.js";

const Home = (props) => {
	const miNumero = props.contador.split('');
	const ctaAtras = props.cuentaAtras.split('');

	const miNumeroHtml = miNumero.map((elemento)=>{ return <Caja numero={elemento} caja="numero"/>;});
	const ctaAtrasHtml = ctaAtras.map((elemento)=>{ return <Caja numero={elemento} caja="numero"/>;});
	
	function hemosLlegado(){
		if(props.contador == props.avisarEn) alert("Hemos llegado a " + props.avisarEn);
	}

	return (
		<>
			{hemosLlegado()}
			<div className="miFila">
				<Caja numero="" caja="simbolo"/>
				{miNumeroHtml}
			</div>

			<div className="miFila">
				<Caja numero="" caja="simbolo"/>
				{ctaAtrasHtml}
			</div>
		</>
	);
};

Home.propTypes = {
	miNumero: PropTypes.string,
	ctaAtras: PropTypes.string,
	avisarEn: PropTypes.number
};

export default Home;
