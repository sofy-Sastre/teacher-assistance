import React from "react";
import './App.css';
import {View} from 'react';
import Login from './UI/components/Login';
import Registro from './UI/components/Registro';
import Pantallapincipal from './UI/components/Pantallaprincipal';
import Cursos from './UI/components/Cursos';
import Input_cursos from './UI/components/Input_cursos'; 

export default function App() {
  return (
    <View>
      <Login></Login> 
      <Registro></Registro>
      <Pantallapincipal></Pantallapincipal>
      <Cursos></Cursos>
      <Input_cursos></Input_cursos>
    </View>
  );    
}








    

