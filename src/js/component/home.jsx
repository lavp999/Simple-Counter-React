import React from "react";
import Reloj from "../component/reloj.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo! Desde Gitpod</h1>
			<p><img src={rigoImage} /></p>

			<Reloj />
		</div>
	);
};

export default Home;
