import React from 'react'
import "./NavBar.css"
import logo from "../../Assets/logo.png"
import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from "react-router-dom"


const NavBar = ({nombre}) => {

  const categorias = [
  {nombre:"Botines", id:0, ruta:"/categoria/Botines"},
  {nombre:"Zapatillas", id:1, ruta:"/categoria/Zapatillas"},
  {nombre:"Indumentaria", id:2, ruta:"/categoria/Indumentaria"},
  {nombre:"Accesorios", id:3, ruta:"/categoria/Accesorios"},
  ]

  return (
    <header>
        <Link to="/">
          <img src={logo} alt="Tienda virtual" />
        </Link>
        <h1>{nombre}</h1>
        <nav>
          {
          categorias.map((categoria)=>{
            return <NavLink key={categoria.id} to={categoria.ruta}>{categoria.nombre}</NavLink> 
          })
        }
        </nav>
        <Link to="/cart">
          <CartWidget/>
        </Link>

    </header>
  )
}

export default NavBar
