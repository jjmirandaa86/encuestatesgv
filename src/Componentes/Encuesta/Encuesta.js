import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cabecera from "../Cabecera/Cabecera";
import Cuerpo from "../Cuerpo/Cuerpo";
//Enviar parametros a los Hijos
import data from "../Json/data.json";

export default class Encuesta extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs>
            <Cabecera
              color_fondo={data.color_fondo}
              color_fondo_tabla={data.color_fondo_tabla}
              color_letra={data.color_letra}
              tamano_titulo={data.tamano_titulo}
              tamano_subtitulo={data.tamano_subtitulo}
              disponible_titulo={data.disponible_titulo}
              disponible_mensaje={data.disponible_mensaje}
              disponible_contacto={data.disponible_contacto}
              disponible_fecha={data.disponible_fecha}
              logo_alt={data.logo_alt}
              logo_ancho={data.logo_ancho}
              logo_alto={data.logo_alto}
            />
          </Col>
        </Row>
        <Row>
          <Col xs>
            <Cuerpo
              color_fondo={data.color_fondo}
              color_fondo_tabla={data.color_fondo_tabla}
              color_letra={data.color_letra}
              tamano_titulo={data.tamano_titulo}
              tamano_subtitulo={data.tamano_subtitulo}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
