import React, {View} from "react";


export default function Input_props(props) {
    return (
        <div>
            <label htmlFor="numero">{props.nombre}</label>
            <input className="input" type="text" id="numero" name="numero" placeholder={props.place} />
        </div>
    )
}