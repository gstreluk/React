import React from 'react'
import "./NavBar.css"
import logo from "../../Assets/logo.jpg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const NavBar = () => {
  return (
    <header>
        <img src={logo} alt="carrito" />
        <h1>Titulo</h1>
        <nav>
            <a href="">Categoria 1</a>
            <a href="">Categoria 2</a>
            <a href="">Categoria 3</a>
            <a href="">Categoria 4</a>
        </nav>
        <ShoppingCartIcon fontSize="large"/>
    </header>
  )
}

export default NavBar
