import { Fragment } from "react";
import "./styles/Registro.css"

export default function Registro() {
    return (
        <Fragment>
            <div className="contenedor">
                <h1>Registro</h1>
                <p>Complete los siguientes datos</p>
                <form className="form" >
                    <div>
                        <label htmlFor="nombre">Nombre completo</label><br />
                        <input type="text" id="nombre" name="nombre" placeholder="Exequiel Wiedermann" />
                    </div>

                    <div>
                        <label htmlFor="numero">N° de Empleado</label><br />
                        <input type="text" id="numero" name="numero" placeholder="****" />
                    </div>

                    <div>
                        <label htmlFor="correo">E-mail</label><br />
                        <input type="text" id="correo" name="correo" placeholder="correo@correo.com" />
                    </div>

                    <div>
                        <label htmlFor="contraseña">Contraseña</label><br />
                        <input type="password" id="contraseña" name="contraseña" placeholder="Introduzca su contraseña" />
                    </div>

                    <div>
                        <button>Crear Cuenta</button><br />
                        <p><a href="#">¿Ya tienes cuenta? Iniciar sesion</a></p>
                    </div>

                </form>
            </div>
        </Fragment>
    );
}




