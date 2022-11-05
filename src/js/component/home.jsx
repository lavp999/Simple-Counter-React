import React from "react";
import Caja from "../component/caja.js";

// <Caja numero = {props.contador} caja = "simbolo" />

const Home = (props) => {
	const miNumero = props.contador;
	return (
		<>
			<div className="miFila">
				<Caja numero="" caja="simbolo"/>
				<Caja numero={Math.floor(miNumero / 1000000)} caja="numero"/>
				<Caja numero={Math.floor(miNumero / 100000)} caja="numero"/>
				<Caja numero={Math.floor(miNumero / 10000)} caja="numero"/>
				<Caja numero={Math.floor(miNumero / 1000)} caja="numero"/>
				<Caja numero={Math.floor(miNumero / 100)} caja="numero"/>
				<Caja numero={Math.floor(miNumero / 10)} caja="numero"/>
				<Caja numero={Math.floor(miNumero)} caja="numero"/>
			</div>
		</>
	);
};

export default Home;
