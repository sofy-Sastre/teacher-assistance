import React from "react";
import Input_props from "./Input_props";


export default function Registro({navigation}) {
    return (
        <div>
            <div className="contenedor">
                <h1>Registro</h1>
                <p>Complete los siguientes datos</p>
                <form className="form" >
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
                        <Input_props nombre=">Contraseña" place="Introduzca su contraseña"></Input_props>
                    </div>

                    <div>
                        <button>Crear Cuenta</button><br />
                        <p><a>¿Ya tienes cuenta? Iniciar sesion</a></p>
                    </div>

                </form>
            </div>
        </div>
    );
}




