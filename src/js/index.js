import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";               // include your styles into the webpack bundle
import Home from "./component/home.jsx";    //import your own components

const cajas = 5
let miContador = 0;
let cuentaAtras = parseInt("9".padStart(cajas,"9"), 10);


setInterval(() => {
    ReactDOM.render(<Home contador={miContador.toString().padStart(cajas,"0") } 
                          cuentaAtras={cuentaAtras.toString().padStart(cajas,"9") } 
                          avisarEn={10}
    />, document.querySelector("#app"));

    miContador += 1;
    cuentaAtras--;
}, 1000);
