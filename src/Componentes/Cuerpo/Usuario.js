import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Agencia from "../../Componentes/Cuerpo/Agencia";
import data from "../Json/data.json";

export default class Usuario extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      comboCargo: "",
      comboFuncionario: [],
      comboAgencia: [],
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
    });
    this.setState({
      comboFuncionario: cambioCargo(e.target.value),
    });
  }

  cambioFuncionario(e) {
    console.log("Funcion de clase -> cambioFuncionario(e)");
    console.log("   -> " + e.target.value);
  }

  cambioAgencia(e) {
    console.log("Funcion de clase -> cambioAgencia(e)");
    console.log("   -> " + e.target.value);
    this.setState({
      comboAgencia: buscaAgencia(e.target.value),
    });
    console.log(this.state.comboAgencia);
  }

  componentDidUpdate(e) {
    console.log("Funcion de clase -> componentDidUpdate(e)");
  }

  render(props) {
    console.log("Funcion de clase -> render(props)");
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
        <Form.Group controlId="usuarioCargo">
          <Form.Label>Cargo: </Form.Label>
          <Form.Control
            as="select"
            value={this.state.comboCargo}
            onChange={this.cambioCargo}
          >
            <option></option>
            <option value="COS">COS</option>
            <option value="JRV">JRV</option>
            <option value="GV">GV</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Funcionario: </Form.Label>
          <Form.Control as="select">
            {this.state.comboFuncionario.map((el) => (
              <option>{el.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Agencia
          color_fondo={this.props.color_fondo}
          color_fondo_tabla={this.props.color_fondo_tabla}
          color_letra={this.props.color_letra}
          tamano_titulo={this.props.tamano_titulo}
          tamano_subtitulo={this.props.tamano_subtitulo}
          arrayAgencias={this.state.comboAgencia}
        />
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

function buscaAgencia(valorFiltro) {
  console.log("Funcion -> buscaAgencia(valorFiltro)");
  console.log("   -> " + valorFiltro);
  let res = [];
  if (valorFiltro != "") {
    console.log("busca las agencia que tiene el funcionario");
    console.log("Filter Agencias: " + valorFiltro);
    res = data.agencias.filter((it) => it.id.includes(valorFiltro));
    console.log(res);
    console.log("Fin Filter Agencias");
  }
  return res;
}
