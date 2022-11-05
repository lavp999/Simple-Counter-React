import React from "react";
import Home from "../component/home.jsx";

const Formulario = (props) => {
    let miContador = 0;
    let cuentaAtras = 10000000;
    let avisarEn = 10;
        
	function hemosLlegado(){
		if(miContador == avisarEn) alert("Hemos llegado a " + avisarEn);
	}

	function iniciar(){  // esto no se puede hacer
		miContador = 0;
		cuentaAtras = 10000000;
	}
	
	function parada(){
	}
	function reanudar(){
	}
	
	return (
		<>

    {setInterval(() => {
                		<div>
                            <div className="miFila" role="toolbar" aria-label="Toolbar with button groups">
                                <button type="button" className="cajaSimbolo" onClick={iniciar}><i class="far fa-hourglass-start"></i></button>
                                <button type="button" className="cajaSimbolo" onClick={parada}><i class="fas fa-hand-paper"></i></button>
                                <button type="button" className="cajaSimbolo" onClick={reanudar}><i class="fas fa-play"></i></button>
                            </div>
                            <h1>{miContador}</h1>
                            <Home contador={miContador} 
                                cuentaAtras={cuentaAtras} 
                            />
                            miContador++;
                            cuentaAtras--;
                        </div>
                        {hemosLlegado()}
                       }, 1000)}
		</>
	);
};

export default Formulario;
