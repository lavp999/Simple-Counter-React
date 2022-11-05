import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";               // include your styles into the webpack bundle
import Home from "./component/home.jsx";    //import your own components

let miContador = 0;
let cuentaAtras = 10000000;
setInterval(() => {
    ReactDOM.render(<Home contador={miContador} 
                          cuentaAtras={cuentaAtras} 
                          avisarEn="10"
    />, document.querySelector("#app"));

    miContador += 1;
    cuentaAtras--;
}, 1000);
