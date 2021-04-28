import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Funcionario from "../../Componentes/Cuerpo/Funcionario";

export default class Cargo extends Component {
  render(props) {
    console.log("Cargo -> ========= render ============");
    return (
      <>
        <Form.Group controlId="valorCargo" class="valorCargo">
          <Form.Label>Cargo: * </Form.Label>
          <Form.Control as="select" onChange={this.onChangeCargo}>
            <option></option>
            {this.state.dataCargo.map((dato) => (
              <option>{dato}</option>
            ))}
          </Form.Control>
        </Form.Group>
        {this.state.funcionario ? (
          <Funcionario
            datos_funcionario={this.props.datos_funcionario}
            dato_Cargo={this.state.datoCargoValue} //this.handler
            datos_agencias={this.props.datos_agencias}
          />
        ) : (
          ""
        )}
      </>
    );
  }

  constructor(props) {
    console.log("Cargo -> ========= Constructor ============");
    super(props);
    this.state = {
      dataCargo: this.extraeCargosUnicos(this.props.datos_funcionario),
      funcionario: false,
      datoCargoValue: "",
    };
    this.onChangeCargo = this.onChangeCargo.bind(this);
  }

  onChangeCargo(e) {
    console.log("Cargo -> =========== metodoCargo ============");
    console.log("   -> " + e.target.value);
    //this.setState({ dataCargo: e.target.value, });
    this.props.handler(e.target.value);
    if (document.getElementsByTagName("valorCargo").value != "") {
      this.setState({
        funcionario: true,
        datoCargoValue: e.target.value,
      });
    }
  }

  extraeCargosUnicos(datos_funcionario) {
    console.log("Cargo -> =========== extraeCargosUnicos ============");
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
