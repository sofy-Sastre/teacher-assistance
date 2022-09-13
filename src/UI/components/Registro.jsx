import React from "react";
import Input_props from "./Input_props";
import "./styles/Registro.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";




export default function Registro() {
    return (
        <div className="registro" >
            <div >
                <img src={require('./logo epet 20.png')} className="img" height={80} width={70} />
                <div className="titulo">
                    <h1>Registro</h1>
                    <p>Complete los siguientes datos</p>
                    <form >
                        <div className="input-props">
                            <div>
                                <Input_props nombre="Nombre Completo" place="Nombre y Apellido"></Input_props>
                            </div>

                            <div>
                                <Input_props nombre="N° Empleado" place="*****"></Input_props>
                            </div>

                            <div>
                                <Input_props nombre="E-mail" place="Correo@correo.com"></Input_props>
                            </div>

                            <div>
                                <Input_props nombre="Contraseña" place="Introduzca su contraseña"></Input_props>
                            </div>
                        </div>
                        <div className="boton-cuenta">
                            <button>Crear Cuenta</button><br />
                            <Link className="registrar-login" to="/Login">¿Ya tienes cuenta? Inicia sesión</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}




