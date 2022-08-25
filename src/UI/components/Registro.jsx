import { Fragment } from "react";
import Input2 from "./input2";
// import "./styles/Registro.css"

export default function Registro() {
    return (
        <View>
            <div className="contenedor">
                <h1>Registro</h1>
                <p>Complete los siguientes datos</p>
                <form className="form" >
                    <div>
                        <Input2 nombre="Nombre Completo" place="ezequiel wiedermann"></Input2>
                    </div>

                    <div>
                        <Input2 nombre="N° empleado" place="*****"></Input2>
                    </div>

                    <div>
                        <Input2 nombre="E-mail" place="correo@correo.com"></Input2>
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




