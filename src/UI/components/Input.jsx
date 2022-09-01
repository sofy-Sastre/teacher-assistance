import React from "react";
import "./styles/Input.css";
import { Row, Col} from "react-bootstrap";

export default function Input(props) {
    return (
        <div>
            <Row className="contenedor">
            <Row className="label">
            <label htmlFor="numero">{props.nombre}</label>
            </Row>
            <Row>
            <input className="input" type="text" id="numero" name="numero" placeholder={props.placeh} />
            </Row>
            </Row>
        </div>
    )
}
