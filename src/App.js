import React from "react";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import NavBar from "./Componentes/NavBar/NavBar";



const App = () => {
  const nombre ="Calzados Tino"; 
  const mensaje ="Catálogo de ofertas!";
 
  return (  
     <>
      <NavBar nombre={nombre}/>
      <ItemListContainer mensaje={mensaje}/>
          
    </>
  );
};


export default App