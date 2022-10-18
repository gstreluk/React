import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";




const productos = [
  {nombre:"Nike", id:0, descripcion:"Phantom GT2 Elite SG-PRO", precio:20000, stock:5, imagen:"Nike.jpg" },
  {nombre:"Puma", id:1, descripcion:"FUTURE Z 1.3 INSTINCT", precio:18000, stock:4, imagen:"Puma Future.jpg" },
  {nombre:"Adidas", id:2, descripcion:"X Speedflow .1 FG ‘Messi Unparalleled’", precio:20000, stock:6, imagen:"Adidas X.jpg" },
  {nombre:"Topper", id:3, descripcion:"Kaiser II Tf", precio:15000, stock:2, imagen:"Topper.jpg" },
];

const obtenerProductos = new Promise((resolve, reject) => {
  resolve(productos);
})

const ItemListContainer = ({mensaje}) => {

  const [productos, setProductos] = useState([]);
    
  useEffect(()=> {
    obtenerProductos
    .then((data)=>{
    setProductos(data);
  })
  }, [])

  return (
   <>
   <h3>{mensaje}</h3>
    <ItemList lista={productos}/>
   </>
  )
}

export default ItemListContainer
