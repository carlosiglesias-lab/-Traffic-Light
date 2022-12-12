import React, { useState, useEffect } from "react";
import NewColor from "./newColor";
//import StartSecuence from "./startSecuence";
const Home = () => {
	const [color, setColor] = useState("");
	const [colorAuto, setColorAuto] = useState("red");
	const [statusId, setStatusId] = useState(0);
	const [extraColor, setExtraColor] = useState(false);
	//para crear primer semaforo que funciona automaticamente
	useEffect(() => {
		const interval = setInterval(() => {
			setColorAuto((colorAuto) => colorAuto == "red" ? colorAuto = "yellow" : colorAuto == "yellow" ? colorAuto = "green" : colorAuto = "red");
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	//funcion para encender / apagar
	//si esta encendido statusID sera > 0 entonces se pone a 0 y se para la secuencia
	const startSecuence = () => {
		if (statusId) {
			clearInterval(statusId);
			setStatusId(0);
			setColor("");
			return;
		}
		//endender secuencia
		const newStatusId = setInterval(() => {
			setColor((color) => color == "red" ? color = "yellow" : color == "yellow" ? color = "green" : color = "red")
		}, 1000);
		setStatusId(newStatusId);
	}

	return (
		<div className="row">
			<h1 className="text-center">Light Trafic</h1>
			<div className="container">
				<div className={"circle " + (colorAuto == "red" ? colorAuto : null)} />
				<div className={"circle " + (colorAuto == "yellow" ? colorAuto : null)} />
				<div className={"circle " + (colorAuto == "green" ? colorAuto : null)} />
			</div>
			<div className="container">
				<div className={"circle " + (color == "red" ? color : null)} onClick={() => setColor("red")} />
				<div className={"circle " + (color == "yellow" ? color : null)} onClick={() => setColor("yellow")} />
				<div className={"circle " + (color == "green" ? color : null)} onClick={() => setColor("green")} />
				{extraColor ? <NewColor /> : null}
			</div>
			<div className="buttons d-flex justify-content-end">
				<button type="button" onClick={startSecuence}>{statusId ? "STOP" : "START"}</button>
				<button type="button" onClick={() => setExtraColor(!extraColor)}>{extraColor ? "Delete Color" : "Extra Color"}</button>
			</div>
		</div>

	);
};

export default Home;
