import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import data from "../Json/data.json";

export default class Usuario extends Component {
  render(props) {
    return (
      <>
        <Alert
          variant={this.props.color_fondo}
          text={this.props.color_fondo === "light" ? "dark" : "white"}
        >
          <Alert.Heading as={this.props.tamano_titulo}>
            Datos del funcionario:
          </Alert.Heading>
        </Alert>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Cargo: </Form.Label>
          <Form.Control as="select">
            {data.funcionarios.map((el) => (
              <option>{el.short_position}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Funcionario: </Form.Label>
          <Form.Control as="select">
            {data.funcionarios.map((el) => (
              <option>{el.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </>
    );
  }
}
