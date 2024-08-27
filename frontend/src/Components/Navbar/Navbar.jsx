import React, { useState } from 'react';
import './Navbar.css'

import logo from "../Assets/bikeurban_whitelogo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [menu,setMenu] = useState("/");

  return (
    <div className='navbar'>
      <div className='nav-logo' onClick={()=>{setMenu("/")}}>
        <Link to='/'><img src={logo} alt="" /></Link>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("produtos")}}><Link style={{textDecoration: 'none', color: ' #000'}} to='produtos'>Produtos</Link>{menu==="produtos"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("sobre")}}><Link style={{textDecoration: 'none', color: ' #000'}}  to='/sobre'>Sobre Nós</Link>{menu==="sobre"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("contatos")}}><Link style={{textDecoration: 'none', color: ' #000'}} to='/contato'>Contato</Link>{menu==="contatos"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
