import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function ButtonNavSig(props) {
  let { texto1, texto2, titulo } = props;
  let [mostrarOcultar, setMostrarOcultar] = useState(false);
  //funcion para mostrar y ocultar el menu
  let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
    console.log(mostrarOcultar);
  };
  //Funcion para ocultar el menu al hacer click en un link
  return (
    <div>
      {mostrarOcultar ? (
        <>
        {/* Ejemplo para linkear los componentes de la NavBar */}
          <p onClick={hide}>{titulo}</p>
          <ul>
            <li>
            <Link to={"#"}>{texto1}</Link>
            </li>
            <li>
              <Link to={"#"}>{texto2}</Link>
            </li>
          </ul>
        </>
      ) : (
        <p onClick={hide}>{titulo}</p>
      )}
    </div>
  );
}
