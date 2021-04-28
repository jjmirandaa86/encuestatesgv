import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Grid from "../../Componentes/Cuerpo/Grid";

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
              <option value={el.idFuncionario}>{el.name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="valorCorreo" class="valorCorreo">
          <Form.Label>Correo: * </Form.Label>
          <Form.Control as="select">
            {this.state.funcionarioSeleccionado != 0
              ? this.state.funcionarioSeleccionadoDatos.map((el) => (
                  <option value={el.correo}>{el.correo}</option>
                ))
              : ""}
          </Form.Control>
        </Form.Group>

        {this.state.funcionarioSeleccionado != 0 ? (
          <Grid
            color_fondo={this.props.color_fondo}
            color_fondo_tabla={this.props.color_fondo_tabla}
            color_letra={this.props.color_letra}
            tamano_titulo={this.props.tamano_titulo}
            tamano_subtitulo={this.props.tamano_subtitulo}
            datos_agencias={this.props.datos_agencias}
            agencia_funcionario={this.state.funcionarioSeleccionadoAgencias}
          />
        ) : (
          ""
        )}
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
      ), //Datos de los funcionarios con su cargo corto seleccionado
      funcionarioSeleccionado: 0, //Id del funcionario seleccionado
      funcionarioSeleccionadoDatos: [], //Datos del funcionario seleccionado
      funcionarioSeleccionadoAgencias: [], //Datos del funcionario seleccionado agencias
    };
    this.metodoFuncionario = this.metodoFuncionario.bind(this);
  }

  metodoFuncionario(e) {
    console.log("Funcionario -> ========= metodoFuncionario ============");
    console.log("Funcionario -> ========= metodoFuncionario ============");
    //Guarda valores seleccionados a un state.
    this.setState({
      funcionarioSeleccionado: e.target.value,
      funcionarioSeleccionadoDatos: this.buscaCorreoXFuncionario(
        this.props.datos_funcionario,
        e.target.value
      ),
    });
  }

  buscaFuncionariosXCargo(datos_funcionario, dato_Cargo) {
    console.log(
      "Funcionario -> ========= buscaFuncionariosXCargo ============"
    );
    console.log(datos_funcionario);
    console.log(dato_Cargo);
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

  buscaCorreoXFuncionario(datos_funcionario, datoIdFuncionario) {
    console.log(
      "Funcionario -> ========= buscaCorreoXFuncionario ============"
    );
    console.log(datos_funcionario);
    console.log(datoIdFuncionario);
    const varBuscar = [];
    varBuscar.push(parseInt(datoIdFuncionario));
    let arrayFuncionario = datos_funcionario.filter((vectorResultado) => {
      console.log(
        vectorResultado.idFuncionario +
          " - " +
          vectorResultado.short_position +
          " - " +
          vectorResultado.name
      );
      if (!varBuscar.includes(vectorResultado.idFuncionario)) {
        return false;
      } else {
        this.buscarAgenciasFuncionario(vectorResultado.agencias);
      }
      return vectorResultado;
    });
    console.log(arrayFuncionario);
    return arrayFuncionario;
  }

  buscarAgenciasFuncionario(datos_agencias) {
    console.log(
      "Funcionario -> ========= buscarAgenciasFuncionario ============"
    );
    this.setState({
      funcionarioSeleccionadoAgencias: datos_agencias,
    });
    console.log(datos_agencias);
  }
}