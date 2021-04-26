import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class Almacenar extends Component {
  render(props) {
    return (
      <>
        Almacenar datos
        <Button variant={this.props.color_fondo} onClick={WriteToFile}>
          Enviar
        </Button>
      </>
    );
  }
}

function almacerDatos() {
  const dict = [
    { one: [15, 4.5], two: [34, 3.3], three: [67, 5.0], four: [32, 4.1] },
  ];
  const dictstring = JSON.stringify(dict);
  const fs = require("fs");
  fs.writeFile("thing.json", dictstring, function (err, result) {
    if (err) console.log("error", err);
  });
}

function WriteToFile() {
  var fs = require("fs");
  fs.writeFile("nuevo.txt", "Primera línea\nSegunda línea", function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("El archivo fue creado correctamente");
  });
}
