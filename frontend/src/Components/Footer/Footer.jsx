import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_bikeurban.png'
import instagram_icon from '../Assets/instagram_icon_branco.png'
import facebook_icon from '../Assets/facebook.png'
import whatsapp_icon from '../Assets/whatsapp-icon-branco.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
      </div>
      <ul className="footer-links">
        <li>Produtos</li>
        <li>Sobre Nós</li>
        <li>Contato</li>
        <li>Seguros</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={facebook_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>© 2024 BikeUrban. Todos os direitos reservados.</p>
      </div>
    </div>
  )
}

export default Footer
