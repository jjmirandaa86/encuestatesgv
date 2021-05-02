import React, { Component } from "react";
import Cargo from "../../Componentes/Cuerpo/Cargo";
import Otros from "../../Componentes/Cuerpo/Otros";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Grid from "../../Componentes/Cuerpo/Grid";

export default class Cuerpo extends Component {
  render(props) {
    console.log("Cuerpo -> ========= render ============");
    console.log("Valores recibidos de Encuesta");
    console.log(this.props.datos_funcionarios);
    console.log(this.props.datos_agencias);

    return (
      <>
        <form
          id="enviaFormulario"
          action={getAbsolutePath() + "Php/saveData.php"}
          onSubmit={this.handleSubmit}
        >
          <Alert
            variant={this.props.color_fondo}
            text={this.props.color_fondo === "light" ? "dark" : "white"}
          >
            <Alert.Heading as={this.props.tamano_titulo}>
              Datos del funcionario:
            </Alert.Heading>
          </Alert>
          <Cargo
            color_fondo={this.props.color_fondo}
            tamano_titulo={this.props.tamano_titulo}
            color_fondo_tabla={this.props.color_fondo_tabla}
            color_letra={this.props.color_letra}
            tamano_subtitulo={this.props.tamano_subtitulo}
            datos_funcionarios={this.props.datos_funcionarios}
            datos_agencias={this.props.datos_agencias}
          />

          <Otros
            color_fondo={this.props.color_fondo}
            color_fondo_tabla={this.props.color_fondo_tabla}
            color_letra={this.props.color_letra}
            tamano_titulo={this.props.tamano_titulo}
            tamano_subtitulo={this.props.tamano_subtitulo}
          />
          <br />
          <Button variant={this.props.color_fondo} onClick={this.guardar}>
            Enviar
          </Button>
        </form>
      </>
    );
  }

  constructor(props) {
    console.log("Cuerpo -> ========= Constructor ============");
    super(props);
  }

  guardar(e) {
    console.log("Cuerpo -> ========= guardar ============");

    //Cabecera
    const getUsuario = document.getElementById("valorFuncionario").options[
      document.getElementById("valorFuncionario").selectedIndex
    ].text;
    const getCorreo = document.getElementById("valorCorreo").value;
    const getCargo = document.getElementById("valorCargo").value;
    const getNovedad = document.getElementById("valorObservacion").value;
    const getEstrellas = 10;
    //Detalle
    let materiales = [];
    document.querySelectorAll(".tabla-Agencias tbody tr").forEach(function (e) {
      let fila = {
        codigo: e.querySelector(".agencia").innerText,
        material: e.querySelector(".ruta").innerText,
      };
      materiales.push(fila);
    });

    const datos = {
      getFuncionario: getUsuario,
      getCorreo: getCorreo,
      getCargo: getCargo,
      getNovedad: getNovedad,
      getEstrellas: getEstrellas,
      getAgencias: materiales,
    };

    console.log(datos);
    console.log(JSON.stringify(datos));

    (async (datos) => {
      try {
        var init = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(datos),
        };
        let url = getAbsolutePath() + "Php/saveData.php";
        var response = await fetch(url, init);
      } catch (err) {
        console.log("Error al realizar la petición AJAX: " + err.message);
      }
    })();
  }

  cargo(e) {
    console.log("Cuerpo -> ========= cargo ============");
    const cargo = document.getElementById("valorCargo").value;
    return cargo;
  }
}

function getAbsolutePath() {
  console.log("Encuesta -> ========= getAbsolutePath ============");
  var loc = window.location;
  /*
  console.log(loc);
  var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf("/") + 1);
  console.log(pathName);
  return loc.href.substring(
    0,
    loc.href.length -
      ((loc.pathname + loc.search + loc.hash).length - pathName.length)
  );
  */
  return window.location;
}
