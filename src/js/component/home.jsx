import React from "react";
import { useState } from "react";
import TraficLight from "./TraficLight.jsx";
import SwitchButton from "./SwitchButton.jsx";
import PropTypes from "prop-types";

const Home = (props) => {
	const [color1, setColor1] = useState("");
	const [color2, setColor2] = useState("");
	const [color3, setColor3] = useState("");
	const [purple1, setPurple1] = useState("320px");
	const [purpleshow, setPurpleshow] = useState("none");

	// en lugar de hacer que iluminar1 ponga en iluminado setColor1 y el resto apagados, tb se podria haber hecho con ternario, diciendole que si iluminar1=true , iluminar2 y 3 son false
	function iluminar1() {
		setColor1("iluminado");
		setColor2("");
		setColor3("");
	}

	function iluminar2() {
		setColor1("");
		setColor2("iluminado");
		setColor3("");
	}

	function iluminar3() {
		setColor1("");
		setColor2("");
		setColor3("iluminado");
	}
	// funcion para el cambio de color con el boton
	function cambio() {
		if ((color1 === "") & (color2 === "")) {
			iluminar1();
		} else if (color1 === "iluminado") {
			iluminar2();
		} else if (color2 === "iluminado") {
			iluminar3();
		}
	}

	// funcion para que muestre la 4ª luz al pulsar el boton SURPRISE.
	//Si está sin desplegar, el if despliega y quita el NONE del display de la 4ª luz . Si está en grande, pone valores iniciales

	function alturaLuces() {
		if (purple1 === "320px") {
			setPurple1("420px");
			setPurpleshow("");
		} else {
			setPurple1("320px");
			setPurpleshow("none");
		}
	}

	return (
		<>
			<div className="container">
				<div className="wrapperTop">
					{/* meto la parte de arriba en un DIV para hacerle un justify-content-center a este div y que me centre TOP*/}

					<div id="top"></div>
				</div>
				<div id="luces" style={{ height: purple1 }}>
					{/* IMPORTANTE DEJAR ESPACIO DESPUES DE LA CLASE RED PORQUE SINO , JUNTARÁ RED Y COLOR1 Y DARÁ FALLO*/}

					<div className={"red " + color1} onClick={iluminar1}></div>
					<div
						className={"yellow " + color2}
						onClick={iluminar2}></div>
					<div
						className={"green " + color3}
						onClick={iluminar3}></div>
					<div
						className={"purple "}
						style={{ display: purpleshow }}></div>
				</div>

				{/* AQUI EMPEZARÍA COMPONENTE SWITCHBUTTON*/}

				<br />
				<div className="d-flex justify-content-center">
					<button
						type="button"
						className="btn btn-success"
						onClick={cambio}>
						Cambiar luz
					</button>
				</div>

				{/* BOTON PARA AMPLIAR A 4ª LUZ */}

				<br />
				<div className="d-flex justify-content-center">
					<button
						type="button"
						className="btn btn-warning"
						onClick={alturaLuces}>
						Surprise !
					</button>
				</div>
			</div>
		</>
	);
};

export default Home;

// la primera opcion fue hacer las luces como boton, pero entonces fallaba ya que metia la funcion cuando DEJABA DE HACER CLICK//

// OPCIONES A AÑADIR:
// - hacerlo con componentes, intenté llevar el boton a otro componente pero no encontraba la manera de que tirara de la funcion que está en home. Ver con Pedro
