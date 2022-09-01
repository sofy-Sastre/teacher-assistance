import react, {Fragment} from "react";
import "./styles/Pantallapincipal.css";


export default function Pantallapincipal (){
return(
    <view>
        <div className="logo">
        <div>
            <img src={require('./logo.png')} />
        </div> 
        <div className="texto">
            <p>From</p>
            <h1>ACS</h1>
        </div>
    </view>  
);
}