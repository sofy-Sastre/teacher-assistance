
import { Fragment } from "react";
import "./styles/Input.css";
import { Row, Col} from "react-bootstrap";

export default function Input(props) {
    return (
        <Fragment>
            <Row className="contenedor">
            <Row className="label">
            <label htmlFor="numero">{props.nombre}</label>
            </Row>
            <Row>
            <input className="input" type="text" id="numero" name="numero" placeholder={props.placeh} />
            </Row>
            </Row>
        </Fragment>
    )
}
