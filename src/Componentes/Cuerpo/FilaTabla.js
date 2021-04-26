import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";

export default class FilaTabla extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ruta: this.props.e_ruta,
      backup: this.props.e_backups,
      sim: this.props.e_sim,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log("Cambio" + name + value);
    this.setState({
      [name]: value,
    });
  }

  render(props) {
    return (
      <>
        <td>{this.props.agencia}</td>
        <td>
          <input
            type="number"
            id="ruta"
            name="ruta"
            value={this.state.ruta}
            size={2}
            onChange={this.handleChange}
          />
          <Badge variant="success">
            <h7>{this.props.e_ruta}</h7>
          </Badge>{" "}
        </td>
        <td>
          <input
            type="number"
            id="backup"
            name="backup"
            value={this.state.backup}
            size={2}
            onChange={this.handleChange}
          />
          <Badge variant="success">
            <h7>{this.props.e_backups}</h7>
          </Badge>{" "}
        </td>
        <td>
          <input
            type="number"
            id="sim"
            name="sim"
            value={this.state.sim}
            size={2}
            onChange={this.handleChange}
          />
          <Badge variant="success">
            <h7>{this.props.e_sim}</h7>
          </Badge>{" "}
        </td>
      </>
    );
  }
}
