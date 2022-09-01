import react, {Fragment} from "react";
import "./styles/Pantallaprincipal.css";


export default function Pantallaprincipal (){
return(
    <div>
        <div className="logo">
        <div>
            <img src={require('./logo.png')} />
        </div> 
        <div className="texto">
            <p>From</p>
            <h1>ACS</h1>
        </div>
        </div>
    </div>  
);
}