import React from "react";

class Reloj extends React.Component {
	constructor(){
  	super();
    this.state = {
    	HoraActual: new Date()
    };
  }
  render(){
    setTimeout(() => this.setState({
        HoraActual:new Date()
    }),1000);	
    return <div>{this.state.HoraActual.toString()}</div>;
  }
};

export default Reloj;