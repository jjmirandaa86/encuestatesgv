import React, { Component } from "react";
import data from "../Json/data.json";

export default class Prueba extends Component {
  render(props) {
    return (
      <>
        Hola
        {muestra(data.agencias).map((el) => (
          <option value={el.name}>
            {el.name}
            {el.route}
          </option>
        ))}
      </>
    );
  }
}

function muestra(data) {
  const varBuscar = [1, 3];
  const varArreglo = data;
  let arrayAgencias = varArreglo.filter((vectorResultado) => {
    if (!varBuscar.includes(vectorResultado.idAgencia)) return false;
    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return vectorResultado;
  });
  return arrayAgencias;
}
