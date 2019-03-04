import React, { Component, Fragment } from "react";
import "./normalize.css";
import "./skeleton.css";
import Form from "./components/Form";
import { calcularTotal } from "./helpers";
import Resultado from "./components/Resultado";
import Mensaje from "./components/Mensaje";
import Spinner from "./components/Spinner";

class App extends Component {
  state = {
    total: "",
    cantidad: "",
    plazo: "",
    cargando:false
  };

  datosPrestamo = (cantidad, plazo) => {
    const total = calcularTotal(cantidad, plazo);
   
   this.setState({
     cargando:true
   },() => {
     setTimeout(() => {
      this.setState({
      total,
      cantidad,
      plazo,
      cargando:false
    });
     }, 3000);
   })
  };

  render() {


    
    const { total, plazo, cantidad,cargando } = this.state;
    let componente;
    if(total === '' && !cargando){
      componente = <Mensaje/>
    }else if(cargando){
      componente = <Spinner/>
        
    }
    
    else{
      componente = <Resultado total={total} plazo={plazo} cantidad={cantidad} />
    }
    return (
      <Fragment>
        <h1>Cotizador de Prestamos</h1>
        <div className="container">
          <Form datosPrestamo={this.datosPrestamo} />
          <div className="mensajes">
           {componente}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default App;
