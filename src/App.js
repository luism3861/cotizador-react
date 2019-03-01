import React, { Component, Fragment } from "react";
import "./normalize.css";
import "./skeleton.css";
import Form from "./components/Form";
import {calcularTotal} from './helpers';

class App extends Component {

  state = {
    total :'',
    cantidad:'',
    plazo:''
  }

  datosPrestamo = (cantidad,plazo) => {
   const total =  calcularTotal(cantidad,plazo);
  }


  render() {
    return (
      <Fragment>
        <h1>Cotizador de Prestamos</h1>
        <div className="container">
          <Form 
          datosPrestamo = {this.datosPrestamo}
          />
        </div>
      </Fragment>
    );
  }
}
export default App;
