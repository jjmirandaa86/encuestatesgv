import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import FilaTabla from "../Cuerpo/FilaTabla";
import data from "../Json/data.json";

export default class Agencia extends Component {
  render(props) {
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
            <tr>
              <FilaTabla
                agencia="Guayaquil Norte"
                e_ruta="60"
                e_backups="6"
                e_sim="66"
              />
            </tr>
            <tr>
              <FilaTabla
                agencia="Salinas"
                e_ruta="18"
                e_backups="2"
                e_sim="20"
              />
            </tr>
            <tr>
              <FilaTabla
                agencia="Guayaquil Sur"
                e_ruta="55"
                e_backups="6"
                e_sim="61"
              />
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}
