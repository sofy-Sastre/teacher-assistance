
import './App.css';

import { Fragment } from 'react';
// import Login from './UI/components/Login';
import Pantallapincipal from './UI/components/Pantallaprincipal';
import Cursos from './UI/components/Cursos';
import Input_cursos from './UI/components/Input_cursos';

export default function App() {
  return (
    <Fragment>
      {/* <Login></Login> */}
      <Pantallapincipal></Pantallapincipal>
      <Cursos></Cursos>
      <Input_cursos></Input_cursos>
    </Fragment>
  );    
}








    

