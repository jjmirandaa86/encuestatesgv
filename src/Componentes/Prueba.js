import React, { Component } from "react";
import data from "../Json/data.json";

export default class Prueba extends Component {
  render(props) {
    console.log("Hola desde Prueba");
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
  console.log(data);
  const varBuscar = [1, 3];
  const varArreglo = data;

  console.log("Valores a validar: " + varBuscar.length);
  let arrayAgencias = varArreglo.filter((vectorResultado) => {
    console.log(vectorResultado.idAgencia + " - " + vectorResultado.name);
    if (!varBuscar.includes(vectorResultado.idAgencia)) return false;
    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return vectorResultado;
  });
  console.log("Resultado Filtro: ");
  console.log(arrayAgencias);
  return arrayAgencias;
}
