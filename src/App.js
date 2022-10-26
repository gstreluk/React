import React from "react";
import NavBar from "./Componentes/NavBar/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Componentes/CartView/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom"



const App = () => {
  const nombre ="Calzados Tino"; 
  const mensaje ="Catálogo de ofertas!";
   
  return (  
     <>
      <BrowserRouter>
        <NavBar nombre={nombre} />
        <Routes>
          <Route path="/" element={<ItemListContainer mensaje={mensaje} />}/>
          <Route path="/categoria/:id" element={<ItemListContainer mensaje={mensaje} />} />
          <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>  
      </BrowserRouter>
    </>
  );
};


export default App


