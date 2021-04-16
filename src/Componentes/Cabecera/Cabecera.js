import React, { Component } from "react";
import Logo from "../../Componentes/Cabecera/Logo";
import Titulo from "../../Componentes/Cabecera/Titulo";

export default class Cabecera extends Component {
  render(props) {
    return (
      <>
        <Logo alt="Logo corporativo de tesalia Cbc" ancho="300" alto="120" />
        <br />
        <Titulo
          color_fondo={this.props.color_fondo}
          color_fondo_tabla={this.props.color_fondo_tabla}
          color_letra={this.props.color_letra}
          tamano_titulo={this.props.tamano_titulo}
          tamano_subtitulo={this.props.tamano_subtitulo}
          disponible_titulo={this.props.disponible_titulo}
          disponible_mensaje={this.props.disponible_mensaje}
          disponible_contacto={this.props.disponible_contacto}
          disponible_fecha={this.props.disponible_fecha}
        />
      </>
    );
  }
}
