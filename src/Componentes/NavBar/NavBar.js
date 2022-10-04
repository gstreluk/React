import React from 'react'
import "./NavBar.css"
import logo from "../../Assets/logo.jpg"
import CartWidget from '../CartWidget/CartWidget'


const NavBar = ({nombre}) => {

  const categorias = [
  {nombre:"Botines", id:0, ruta:"#"},
  {nombre:"Zapatillas", id:1, ruta:"#"},
  {nombre:"Indumentaria", id:2, ruta:"#"},
  {nombre:"Accesorios", id:3, ruta:"#"},
  ]

  return (
    <header>
        <img src={logo} alt="carrito" />
        <h1>{nombre}</h1>
        <nav>
          {
          categorias.map((categoria)=>{
            return <a key={categoria.id} href={categoria.ruta}>{categoria.nombre}</a> 
          })
        }
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar
