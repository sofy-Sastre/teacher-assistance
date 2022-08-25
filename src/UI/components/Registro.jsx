import { Fragment } from "react";
import Input2 from "./Input-props";


export default function Registro() {
    return (
        <View>
            <div className="contenedor">
                <h1>Registro</h1>
                <p>Complete los siguientes datos</p>
                <form className="form" >
                    <div>
                        <Input2 nombre="Nombre Completo" place="Nombre y Apellido"></Input2>
                    </div>

                    <div>
                        <Input2 nombre="N° Empleado" place="*****"></Input2>
                    </div>

                    <div>
                        <Input2 nombre="E-mail" place="Correo@correo.com"></Input2>
                    </div>

                    <div>
                        <Input2 nombre=">Contraseña" place="Introduzca su contraseña"></Input2>
                    </div>

                    <div>
                        <button>Crear Cuenta</button><br />
                        <p><a>¿Ya tienes cuenta? Iniciar sesion</a></p>
                    </div>

                </form>
            </div>
        </View>
    );
}




