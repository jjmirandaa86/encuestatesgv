import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";
import FilaTabla from "../Cuerpo/FilaTabla";

export default class Grid extends Component {
  render(props) {
    console.log("Grid -> ========= render ============");
    console.log("MANDO A LLAMAR A GRID");
    console.log("MANDO A LLAMAR A GRID");
    console.log("MANDO A LLAMAR A GRID");
    console.log("MANDO A LLAMAR A GRID");
    console.log(this.props.agencia_funcionario);
    console.log(this.props.color_fondo);

    return (
      <>
        <Alert
          variant={this.props.color_fondo}
          text={this.props.color_fondo === "light" ? "dark" : "white"}
        >
          <Alert.Heading as={this.props.tamano_titulo}>
            Disponibilidad Smartphone EV's:
          </Alert.Heading>
        </Alert>
        <Table
          striped
          bordered
          hover
          responsive
          variant={this.props.color_fondo_tabla}
          className="tabla-Agencias"
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
            {this.state.dataAgencias.map((el) => (
              <tr key={el.name}>
                <FilaTabla
                  e_agencia={el.name}
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

  constructor(props) {
    console.log("Grid -> ========= Constructor ============");
    super(props);
    this.state = {
      dataAgencias: this.extraeAgenciasXFuncionario(
        this.props.datos_agencias,
        this.props.agencia_funcionario
      ),
    };
    this.metodoGrid = this.metodoGrid.bind(this);
  }

  metodoGrid(e) {
    console.log("Grid -> =========== metodoGrid ============");
  }

  componentDidUpdate(e) {
    this.state = {
      dataAgencias: this.extraeAgenciasXFuncionario(
        this.props.datos_agencias,
        this.props.agencia_funcionario
      ),
    };
  }

  extraeAgenciasXFuncionario(datos_agencias, agencia_funcionario) {
    console.log("Grid -> =========== extraeAgenciasXFuncionario ============");
    console.log(datos_agencias);
    console.log("Valores a validar: " + agencia_funcionario.length);
    let arrayAgencias = datos_agencias.filter((vectorResultado) => {
      console.log(vectorResultado.idAgencia + " - " + vectorResultado.name);
      if (!agencia_funcionario.includes(vectorResultado.idAgencia))
        return false;
      // Si no se pudo dividir por ninguno de los de arriba, sí es primo
      return vectorResultado;
    });
    console.log(arrayAgencias);
    return arrayAgencias;
  }
}
