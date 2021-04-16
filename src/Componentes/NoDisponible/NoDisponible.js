import React, { Component } from "react";
import { Card, Image, Container, Row, Col } from "react-bootstrap";
import data from "../Json/data.json";
import Horario from "../../Media/Img/horario.png";
import Logo from "../Cabecera/Logo";

export default class NoDisponible extends Component {
  render() {
    return (
      <>
        <br />
        <Container>
          <Row>
            <Col xs>
              <Logo />
            </Col>
          </Row>
          <Row>
            <Col xs>
              <Card
                bg={data.color_fondo}
                text={data.color_fondo === "light" ? "dark" : "white"}
                className="text-center p-3"
                key={1}
              >
                <Card.Header as={data.tamano_titulo}>
                  {data.no_disponible_titulo}
                </Card.Header>
                <div class="center-block">
                  <Image
                    className="center"
                    src={Horario}
                    width={140}
                    height={140}
                    rounded
                  ></Image>
                </div>
                <Card.Body>
                  <Card.Text as={data.tamano_subtitulo}>
                    {data.no_disponible_mensaje} {data.no_disponible_contacto}.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
