import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";
import Agencia from "../../Componentes/Cuerpo/Agencia";
import FilaTabla from "../Cuerpo/FilaTabla";
import data from "../Json/data.json";

export default class Usuario extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      comboCargo: "",
      comboFuncionario: [],
      comboAgencia: [1, 2],
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
    onChangeFuncionario();
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
    this.cambioAgencia(
      buscaAgenciasXUsuario(document.getElementById("valorFuncionario").value)
    );
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
        <Form.Group controlId="valorCargo" class="valorCargo">
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
        <Form.Group controlId="valorFuncionario" class="valorFuncionario">
          <Form.Label>Funcionario: </Form.Label>
          <Form.Control as="select" onChange={onChangeFuncionario}>
            {this.state.comboFuncionario.map((el) => (
              <option value={el.correo}>{el.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Grid
          color_fondo={this.props.color_fondo}
          color_fondo_tabla={this.props.color_fondo_tabla}
          color_letra={this.props.color_letra}
          tamano_titulo={this.props.tamano_titulo}
          tamano_subtitulo={this.props.tamano_subtitulo}
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

function buscaAgenciasXUsuario(valorFiltro) {
  console.log("Funcion -> buscaAgenciasXUsuario()");
  console.log("   -> " + valorFiltro);
  let res = [];
  if (valorFiltro != "") {
    res = data.funcionarios.filter((it) => it.correo.includes(valorFiltro));
    console.log(res);
  }
  return res;
}

function onChangeFuncionario() {
  console.log("Funcion -> onChangeFuncionario()");
  buscaAgenciasXUsuario(document.getElementById("valorFuncionario").value);
}

function Grid(props) {
  return (
    <>
      <Alert
        variant={props.color_fondo}
        text={props.color_fondo === "light" ? "dark" : "white"}
      >
        <Alert.Heading as={props.tamano_titulo}>
          Disponibilidad Smartphone EV's:
        </Alert.Heading>
      </Alert>
      <Table
        striped
        bordered
        hover
        responsive
        variant={props.color_fondo_tabla}
      >
        <thead>
          <tr>
            <th>Agencia</th>
            <th>Ruta</th>
            <th>Backup</th>
            <th>Chip</th>
          </tr>
        </thead>
        <tbody>
          {data.agencias.map((el) => (
            <tr>
              <FilaTabla
                agencia={el.name}
                e_ruta={el.route}
                e_backups={el.backup}
                e_sim={el.sim}
              />
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
