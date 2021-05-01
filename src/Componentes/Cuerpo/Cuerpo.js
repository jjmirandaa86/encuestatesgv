import React, { Component } from "react";
import Cargo from "../../Componentes/Cuerpo/Cargo";
import Otros from "../../Componentes/Cuerpo/Otros";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Grid from "../../Componentes/Cuerpo/Grid";

export default class Cuerpo extends Component {
  render(props) {
    console.log("Cuerpo -> ========= render ============");
    console.log("Valores recibidos de Encuesta");
    console.log(this.props.datos_funcionarios);
    console.log(this.props.datos_agencias);

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Alert
            variant={this.props.color_fondo}
            text={this.props.color_fondo === "light" ? "dark" : "white"}
          >
            <Alert.Heading as={this.props.tamano_titulo}>
              Datos del funcionario:
            </Alert.Heading>
          </Alert>
          <Cargo
            handler={this.handler}
            datos_funcionarios={this.props.datos_funcionarios}
            datos_agencias={this.props.datos_agencias}
          />

          <Otros
            color_fondo={this.props.color_fondo}
            color_fondo_tabla={this.props.color_fondo_tabla}
            color_letra={this.props.color_letra}
            tamano_titulo={this.props.tamano_titulo}
            tamano_subtitulo={this.props.tamano_subtitulo}
          />
          <br />
          <Button variant={this.props.color_fondo} onClick={this.guardar}>
            Enviar
          </Button>
        </form>
      </>
    );
  }

  constructor(props) {
    console.log("Cuerpo -> ========= Constructor ============");
    super(props);
  }

  guardar(e) {
    console.log("Cuerpo -> ========= guardar ============");
    console.log("Hola mundo");
    console.log(document.getElementById("valorCargo").value);
    console.log(document.getElementById("valorFuncionario").value);
    console.log(document.getElementById("valorObservacion").value);
    //console.log(document.getElementById("valorEstrellas").value);
  }

  cargo(e) {
    console.log("Cuerpo -> ========= cargo ============");
    const cargo = document.getElementById("valorCargo").value;
    return cargo;
  }
}
