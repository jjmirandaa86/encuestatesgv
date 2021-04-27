import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import data from "../Json/data.json";

export default class Usuario1 extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      comboCargo: "",
      comboFuncionario: [],
      comboAgencia: [1, 2],
      statusGrid: false,
    };

    this.cambioCargo = this.cambioCargo.bind(this);
    this.cambioFuncionario = this.cambioFuncionario.bind(this);
    this.cambioAgencia = this.cambioAgencia.bind(this);
  }

  cambioCargo(e) {
    console.log("========================================");
    console.log("Funcion de clase -> cambioCargo(e)");
    console.log("   -> " + e.target.value);
    this.setState({
      comboCargo: e.target.value,
      comboFuncionario: cambioCargo(e.target.value),
      statusGrid: true, //cambio el valor para mostrar el grid
    });

    //onChangeFuncionario();
  }

  cambioFuncionario(e) {
    console.log("Funcion de clase -> cambioFuncionario(e)");
    console.log("   -> " + e.target.value);
  }

  cambioAgencia(e) {
    console.log("Funcion de clase -> cambioAgencia(e)");
    console.log("   -> ");
  }

  componentDidUpdate(e) {
    console.log("Funcion de clase -> componentDidUpdate(e)");
    this
      .cambioAgencia
      //buscaAgenciasXUsuario(document.getElementById("valorFuncionario").value)
      ();
  }

  render(props) {
    console.log("Funcion de clase -> render(props)");
    return (
      <>
        {this.state.statusGrid ? (
          <Grid
            color_fondo={this.props.color_fondo}
            color_fondo_tabla={this.props.color_fondo_tabla}
            color_letra={this.props.color_letra}
            tamano_titulo={this.props.tamano_titulo}
            tamano_subtitulo={this.props.tamano_subtitulo}
          />
        ) : (
          <></>
        )}
      </>
    );
  }
}

function cambioCargo(valorFiltro) {
  console.log("Funcion -> cambioCargo(valorFiltro)");
  console.log("   -> " + valorFiltro);
  let res = [];
  if (valorFiltro != "") {
    console.log(
      "Funcion -> cambioCargo(valorFiltro) -> Filter: " + valorFiltro
    );
    res = data.funcionarios.filter((it) =>
      it.short_position.includes(valorFiltro)
    );
    console.log(res);
  }
  return res;
}

function Grid(props) {
  const varDato = props.varDatoEnviado;
}
