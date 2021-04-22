import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import data from "../Json/data.json";

export default class Usuario extends Component {
  //All funcionarios
  static datoFuncionarios = [];
  //Combos
  static c_datoCargos = [];
  static c_datoFuncionario = [];

  static o_datoCargos = new Object();
  static o_datoFuncionario = new Object();

  constructor(props) {
    super(props);
    this.c_datoCargos = new Map(
      data.funcionarios.map((el) => {
        return [el.short_position, el.id];
      })
    );
    o_datoCargos = c_datoCargos

    //Carga valores unicos en el combo cargo, haciendo una agrupacion por el campo short_position

    /*
    let personasMap = this.datoFuncionarios.map((el) => {
      return [el.short_position, el];
    });
    var personasMapArr = new Map(personasMap); // Pares de clave y valor
    this.datoCargos = [...personasMapArr.values()]; // Conversión a un array
    ordenarAsc(this.datoCargos, "short_position"); //Ordena ascendentemente
    console.log(this.datoCargos);
    */
  }

  render(props) {
    return (
      <>
        <Alert
          variant={this.props.color_fondo}
          text={this.props.color_fondo === "light" ? "dark" : "white"}
        >
          <Alert.Heading as={this.props.tamano_titulo}>
            Datos del funcionario:
          </Alert.Heading>
        </Alert>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Cargo: </Form.Label>
          <Form.Control as="select" onChange={this.onChangeCargo}>
            {data.funcionarios.map((el) => (
              <li key={el}>{el.short_position}</li> // siempre necesita un KEY
            ))}
            {data.funcionarios.map((el) => {
              console.log("hola mundo");
              console.log(el + el.short_position);
              <option>{el.short_position}</option>;
            })}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Funcionario: </Form.Label>
          <Form.Control as="select">
            {/*
              
              this.c_datoFuncionario.map((el) => (
                <option>{el.name}</option>
              ))
              */}
            }
          </Form.Control>
        </Form.Group>
      </>
    );
  }

  onChangeCargo() {
    console.log("se cambio el valor de cargo");
    /*
    var filtrado = data.funcionarios.filter(function (v) {
      return v.short_position == "COS";
    });
    console.log(filtrado);
    */

    /*
    let funcionariosMap = data.funcionarios.map((el) => {
      return [el.name, el];
    });
    this.datoFuncionarios = filtraJson(funcionariosMap, "short_position", "GV");
    console.log(this.datoFuncionarios);
    //console.log(document.getElementsByClassName("comboCargo"));
    //Carga valores unicos dependiendo del cargo

    
    let datoFuncionarios = data.funcionarios.map((el) => {
      return [el.short_position, el, el.name];
    });
    console.console.log(datoFuncionarios);
    var personasMapArr = new Map(personasMap); // Pares de clave y valor
    this.datoFuncionarios = [...personasMapArr.values()]; // Conversión a un array
    */
  }
}

function ordenarAsc(p_array_json, p_key) {
  p_array_json.sort(function (a, b) {
    return a[p_key] > b[p_key];
  });
}

function filtraJson(p_array_json, p_key, p_value) {
  console.log("entro");
  return p_array_json.filter(function (e) {
    return e[p_key] == p_value;
  });
}
