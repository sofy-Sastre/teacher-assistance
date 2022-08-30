import React, {View} from "react";


export default function Input_props(props) {
    return (
        <View>
            <label htmlFor="numero">{props.nombre}</label>
            <input className="input" type="text" id="numero" name="numero" placeholder={props.place} />
        </View>
    )
}