import React from "react";
import './App.css';
import Login from './UI/components/Login';
import Registro from './UI/components/Registro';
import Pantallaprincipal from './UI/components/Pantallaprincipal';
import Cursos from './UI/components/Cursos';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



export default function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Registro" element={<Registro/>}/>
        </Routes>
      </div>
    </Router>
    // <div>
    //    <Login></Login>
    //    {/* <Registro></Registro> */}
    //    {/* <Pantallapincipal></Pantallapincipal> */}
    //    {/* <Cursos></Cursos> */}
    //  </div>
  );
}












