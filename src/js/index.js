import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";               // include your styles into the webpack bundle
import Home from "./component/home.jsx";    //import your own components

let miContador = 0;
setInterval(() => {
    ReactDOM.render(<Home contador={miContador} />, document.querySelector("#app"));
    miContador += 1;
}, 1000);

