import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default class Cuerpo extends Component {
  render(props) {
    console.log("Cuerpo -> ========= render ============");
    return (
      <>
        <Form.Group controlId="valorCargo" class="valorCargo">
          <Form.Label>Cargo: * </Form.Label>
          <Form.Control as="select">
            <option></option>
            {this.state.dataCargo.map((dato) => (
              <option>{dato}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </>
    );
  }

  constructor(props) {
    console.log("Cuerpo -> ========= Constructor ============");
    super(props);
    this.state = {
      dataCargo: this.extraeCargosUnicos(this.props.datos_funcionario),
    };
    this.metodoCargo = this.metodoCargo.bind(this);
  }

  metodoCargo(e) {
    console.log("Cuerpo -> =========== metodoCargo ============");
    console.log("   -> " + e.target.value);
    this.setState({
      dataCargo: e.target.value,
    });
  }

  extraeCargosUnicos(datos_funcionario) {
    console.log("Cuerpo -> =========== extraeCargosUnicos ============");
    const varBuscar = [];
    console.log("Valores a validar: " + datos_funcionario.length);
    let arrayFuncionario = datos_funcionario.filter((vectorResultado) => {
      if (!varBuscar.includes(vectorResultado.short_position)) {
        varBuscar.push(vectorResultado.short_position);
        return false;
      }
    });
    console.log(varBuscar);
    return varBuscar.sort();
  }
}
