import React, { Component } from "react";
import Usuario from "../../Componentes/Cuerpo/Usuario";
import Agencia from "../../Componentes/Cuerpo/Agencia";
import Otros from "../../Componentes/Cuerpo/Otros";
import Button from "react-bootstrap/Button";

export default class Cabecera extends Component {
  render(props) {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Usuario
            color_fondo={this.props.color_fondo}
            color_fondo_tabla={this.props.color_fondo_tabla}
            color_letra={this.props.color_letra}
            tamano_titulo={this.props.tamano_titulo}
            tamano_subtitulo={this.props.tamano_subtitulo}
          />
          <Agencia
            color_fondo={this.props.color_fondo}
            color_fondo_tabla={this.props.color_fondo_tabla}
            color_letra={this.props.color_letra}
            tamano_titulo={this.props.tamano_titulo}
            tamano_subtitulo={this.props.tamano_subtitulo}
          />
          <Otros
            color_fondo={this.props.color_fondo}
            color_fondo_tabla={this.props.color_fondo_tabla}
            color_letra={this.props.color_letra}
            tamano_titulo={this.props.tamano_titulo}
            tamano_subtitulo={this.props.tamano_subtitulo}
          />
          <br />
          <Button variant={this.props.color_fondo} onClick="">
            Enviar
          </Button>
        </form>
      </>
    );
  }
}
