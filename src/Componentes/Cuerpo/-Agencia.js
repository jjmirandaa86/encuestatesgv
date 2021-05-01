/*
import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import FilaTabla from "./FilaTabla";
import data from "../Json/data.json";

export default class Agencia extends Component {
  render(props) {
    console.log("========>>>>>");
    console.log(this.props.arrayAgencias);
    console.log("========>>>>>");
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
}

*/
