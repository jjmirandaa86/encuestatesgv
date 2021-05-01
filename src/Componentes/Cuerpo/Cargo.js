import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Funcionario from "../../Componentes/Cuerpo/Funcionario";

export default class Cargo extends Component {
  render(props) {
    console.log("Cargo -> ========= render ============");
    console.log(this.props.datos_funcionarios);
    console.log(this.props.datos_agencias);
    return (
      <>
        <Form.Group controlId="valorCargo" class="valorCargo">
          <Form.Label>Cargo: * </Form.Label>
          <Form.Control as="select" onChange={this.onChangeCargo}>
            <option></option>
            {this.state.dataCargo.map((dato) => (
              <option key={dato}>{dato}</option>
            ))}
          </Form.Control>
        </Form.Group>
        {this.state.funcionario ? (
          <Funcionario
            datos_funcionario={this.props.datos_funcionarios}
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
    const x = [
      {
        idFuncionario: 1,
        name: "Francisco Avalos",
        position: "Gerente de Ventas Costa",
        short_position: "GV",
        correo: "favalos@cbc.co",
        agencias: [1, 2, 3, 4, 5],
      },
      {
        idFuncionario: 2,
        name: "Diana Landucci",
        position: "Gerente de Ventas Especiales",
        short_position: "GV",
        correo: "ldanducci@cbc.co",
        agencias: [5, 6],
      },
    ];
    console.log("Cargo" + x);
    console.log("Cargo" + this.props.datos_funcionarios);
    this.state = {
      //dataCargo: this.extraeCargosUnicos(x),
      dataCargo: this.extraeCargosUnicos(this.props.datos_funcionarios),
      funcionario: false,
      datoCargoValue: "",
    };
    this.onChangeCargo = this.onChangeCargo.bind(this);
  }

  onChangeCargo(e) {
    console.log("Cargo -> =========== metodoCargo ============");
    console.log("   -> " + e.target.value);
    //this.setState({ dataCargo: e.target.value, });
    if (document.getElementsByTagName("valorCargo").value !== "") {
      this.setState({
        funcionario: true,
        datoCargoValue: e.target.value,
      });
    }
  }

  extraeCargosUnicos(datos_funcionario) {
    console.log("Cargo -> =========== extraeCargosUnicos ============");
    console.log(datos_funcionario);
    const varBuscar = [];
    console.log("Typo de dato es: " + typeof datos_funcionario);
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
