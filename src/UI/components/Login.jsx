
import React, { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import { Row, Col} from "react-bootstrap";
import "./styles/Login.css";
import Input from "./Input";
import Boton from "./Boton"
export default function Login({navigation}) {
    return (
        <div className="contenedor">
            <Container className="centrar">
                <Row>
                    <Col>
                    <img src={require('./logo.png')} className="img" height={200} width={200} />
                        <form className="formulario">
                            <p className="titulo">Inicio de Sesión</p>
                            <Input nombre="N° de empleado" placeh="Introduzca su n° de empleado"></Input>
                            <Input nombre="Contraseña" placeh="Introduzca su contraseña"></Input>
                            <Boton></Boton>
                            <p>
                                <button onClick={() => navigation.navigate("PantallaRegistro")}><a className="registrar" href="#">¿No tienes cuenta? Registrate</a></button>
                            </p>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}




