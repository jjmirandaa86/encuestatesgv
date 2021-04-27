import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default class Funcionario extends Component {
  render(props) {
    console.log("Funcionario -> ========= Render ============");
    return (
      <>
        <Form.Group controlId="valorFuncionario" class="valorFuncionario">
          <Form.Label>Funcionario: *</Form.Label>
          <Form.Control as="select" onChange={this.metodoFuncionario}>
            <option></option>
            {this.state.datoFuncionario.map((el) => (
              <option value={el.name}>{el.name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="valorCorreo" class="valorCorreo">
          <Form.Label>Correo: * </Form.Label>
          <Form.Control as="select">
            <option></option>
            {this.state.datoFuncionario.map((el) => (
              <option value={el.correo}>{el.correo}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </>
    );
  }

  constructor(props) {
    console.log("Funcionario -> ========= Constructor ============");
    super(props);
    this.state = {
      datoFuncionario: this.buscaFuncionariosXCargo(
        this.props.datos_funcionario,
        this.props.dato_Cargo
      ),
    };
    this.metodoFuncionario = this.metodoFuncionario.bind(this);
  }

  metodoFuncionario(e) {
    console.log("Funcionario -> ========= metodoFuncionario ============");
    //this.buscaAgenciasXUsuario(document.getElementById("valorFuncionario").value);
  }

  buscaFuncionariosXCargo(datos_funcionario, dato_Cargo) {
    console.log(
      "Funcionario -> ========= buscaFuncionariosXCargo ============"
    );
    console.log(datos_funcionario);
    const varBuscar = [];
    varBuscar.push(dato_Cargo);
    let arrayFuncionario = datos_funcionario.filter((vectorResultado) => {
      console.log(
        vectorResultado.short_position + " - " + vectorResultado.name
      );
      if (!varBuscar.includes(vectorResultado.short_position)) return false;
      return vectorResultado;
    });
    console.log(arrayFuncionario);
    return arrayFuncionario;
  }
}
