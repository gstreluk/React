import React from 'react'
import { useState } from 'react';
import "./style.css";

const onAdd = ()=>{
    console.log ("Agregaste al carrito");
  } 
   

const ItemCount = ({stock, initial, onAdd,}) => {
    
    const [contador, setContador] = useState(initial);

    const handlerClickSumar = () => {
        setContador(contador + 1);
    }

    const handlerClickRestar = () => {
        setContador(contador - 1);
    }
    const handlerClickLimpiar = () => {
        setContador(1);
        onAdd()
    }


  return (
      <div id= "controles">
          <button onClick={handlerClickSumar} >+</button>
          <h1 id="numero">{contador}</h1>
          <button onClick={handlerClickRestar} >-</button>
          <button onClick={handlerClickLimpiar} >Agregar al carrito</button>

      </div>
  )
}

export default ItemCount
