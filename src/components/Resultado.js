import React from 'react'


const Resultado = (props) => {
    return ( 
        <div className="u-full-width resultado">
            <h2>Resultados</h2>
            <p>La cantidad solicitada fue: ${props.cantidad}</p>
            <p>A Pagar en: {props.plazo} Meses</p>
            <p>Total a Pagar: ${props.total} Meses</p>
            <p>Su pago mensual es de: ${(props.total / props.plazo).toFixed(2)} Meses</p>
        </div>
     );
}   
 
export default Resultado;