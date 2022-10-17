import React from "react";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import NavBar from "./Componentes/NavBar/NavBar";
import ComponentesEstados from "./ComponentesEstados.js"
import ItemCount from "./Componentes/ItemCount/ItemCount.js"


const App = () => {
  const nombre ="Calzados Tino"; 
  const mensaje ="Catálogo de ofertas!";

  const onAdd = ()=>{
    console.log ("Agregaste al carrito");
  } 
   
  return (  
     <>
      <NavBar nombre={nombre}/>
      <ItemListContainer mensaje={mensaje}/>
      <ComponentesEstados />
      {/* <ItemCount stock={10} initial={1} onAdd={onAdd}/> */}
    </>
  );
};


export default App