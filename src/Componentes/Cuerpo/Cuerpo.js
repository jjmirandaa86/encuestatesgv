import React, { Component } from "react";
import Cargo from "../../Componentes/Cuerpo/Cargo";
import Grid from "../../Componentes/Cuerpo/Grid";
import Otros from "../../Componentes/Cuerpo/Otros";
import Funcionario from "../../Componentes/Cuerpo/Funcionario";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default class Cuerpo extends Component {
  render(props) {
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
          <Cargo datos_funcionario={this.props.datos_funcionarios} />
          <Funcionario
            datos_funcionario={this.props.datos_funcionarios}
            dato_Cargo={"GV"}
          />
          <Grid
            color_fondo={this.props.color_fondo}
            color_fondo_tabla={this.props.color_fondo_tabla}
            color_letra={this.props.color_letra}
            tamano_titulo={this.props.tamano_titulo}
            tamano_subtitulo={this.props.tamano_subtitulo}
            datos_agencias={this.props.datos_agencias}
            agencia_funcionario={[3, 2]}
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

  guardar() {
    console.log("Hola mundo");
    console.log(document.getElementById("valorCargo").value);
    console.log(document.getElementById("valorFuncionario").value);
    console.log(document.getElementById("valorObservacion").value);
    //console.log(document.getElementById("valorEstrellas").value);
  }

  cargo(e) {
    const cargo = document.getElementById("valorCargo").value;
    return cargo;
  }
}
