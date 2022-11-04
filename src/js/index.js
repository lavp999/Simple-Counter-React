//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


import "../styles/index.css";               // include your styles into the webpack bundle
import Home from "./component/home.jsx";    //import your own components

let miContador = 0;
setInterval(() => {
    //render your react application
    ReactDOM.render(<Home contador={miContador}/>, document.querySelector("#app"));
    miContador++;
}, 1000);

