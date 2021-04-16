import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import AutosizeInput from "react-input-autosize";

import "./example.less";

export default class FilaTabla extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ruta: "",
      backup: "",
      sim: "",
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

  componentDidMount(props) {
    /* this.setState({
      ruta: this.props.agencia,
    });
    */
  }

  updateInputValue = (input, event) => {
    const newState = {};
    newState[input] = event.target.value;
    this.setState(newState);
  };

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

        <AutosizeInput
          value={this.state.rutas}
          type="number"
          onChange={this.handleChange}
          size={10}
        />
      </>
    );
  }
}
