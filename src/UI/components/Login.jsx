
import React, { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import { Row, Col} from "react-bootstrap";
import "./styles/Login.css";
import Input from "./Input";
import Boton from "./Boton"
export default function Login() {
    return (
        <div className="contenedor-login">
            <Container className="centrar-login">
                <Row>
                    <Col>
                    <img src={require('./logo.png')} height={200} width={200} />
                        <form>
                            <p className="titulo-login">Inicio de Sesión</p>
                            <Input nombre="N° de empleado" placeh="Introduzca su n° de empleado"></Input>
                            <Input nombre="Contraseña" placeh="Introduzca su contraseña"></Input>
                            <Boton></Boton>
                            <p>
                                <a className="registrar-login" href="#">¿No tienes cuenta? Registrate</a>
                            </p>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}




