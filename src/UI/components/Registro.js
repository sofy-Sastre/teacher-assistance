import React, { Fragment } from "react";

export default function Login (){
    return (
        <Fragment>
            <form>
            <h1>Registro</h1>
            <p>Complete los siguientes datos</p>

            <div>
            <label htmlFor="nombre">Nombre completo</label><br/>
            <input type="text" id="nombre" name="nombre" placeholder="Exequiel Wiedermann" />
            </div>

            <div>
            <label htmlFor="numero">N° de Empleado</label><br/>
            <input type="text" id="numero" name="numero" placeholder="****" /> 
            </div>

            <div>
            <label htmlFor="correo">E-mail</label><br/>
            <input type="text" id="correo" name="correo" placeholder="correo@correo.com" /> 
            </div>

            <div>
                <label htmlFor="contraseña">Contraseña</label><br/>
                <input type="password" id="contraseña" name="contraseña" placeholder="Introduzca su contraseña" />
            </div>

            <div>
                <button>Crear Cuenta</button><br/>
                <p><a href="#">¿Ya tienes cuenta? Iniciar sesion</a></p>
            </div>
            </form>
        </Fragment>
    );
}