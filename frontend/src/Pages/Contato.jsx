import React from 'react'
import './CSS/Contato.css'
import instagram_icon from '../Components/Assets/instagram_icon.png'
import facebook from '../Components/Assets/facebook_black.png'
import whatsapp from '../Components/Assets/whatsapp_icon.png'
import relogio from '../Components/Assets/relogio.png'
import localizacao from '../Components/Assets/localizacao.png'
import ligar from '../Components/Assets/ligar.png'
import envelope from '../Components/Assets/e-mail_black.png'
import sp from '../Components/Assets/sp1.jpg'



const Contato = () => {
  return (
    <div>
      <div className='contato-header'>
        <hr />
        <h1>BikeUrban - Contatos e Endereço</h1>
        <p>Entre em contato conosco ou venha nos visitar.</p>
        <hr />
      </div>

        <div className='contato-dados'>
          <div className="contato-loja-online">
            <h2>Nossos Contatos</h2>
            
            <div className="contato-p">
              <p>Entre em contato conosco pelos contatos abaixo:</p>
            </div>         
            <div class="contato-redes">
              <a href="./">
                <img src={instagram_icon} alt="Instagram"/>Instagram
              </a> 
              <a href="./">
                <img src={facebook} alt="Facebook"/>Facebook
              </a>
              <a href="tel:+551199999999">
                <img src={whatsapp} alt="WhatsApp"/>WhatsApp Loja Online
              </a><a href="mailto:assistencia@bikeurban.com">
                <img src={envelope} alt="" />E-mail
              </a>
              <p class="lojas-tempo"><img src={relogio} alt=""/>09-17h de seg à dom</p>
            </div>
           
          </div>

          <div className="contato-loja-fisica">
            <h2>Nosso Endereço</h2>
            
            <div class="lojas-item">
             <img src={sp} alt="mapa marcando o endereço em Rua Ali Perto, 25 - Sao Paulo - SP"/>
              <div class="lojas-conteudo">
                <div class="lojas-dados">
                  <p><img src={localizacao} alt="" />Rua do Pedal, 25. São Paulo - SP</p>
                  <p><img src={ligar} alt="" /><a href="tel:+551199999999">+5511 99999-9999</a></p>
               </div>
               <p class="lojas-tempo"><img src={relogio} alt=""/>08-18h de seg à sex</p>
              </div>
            </div>
            
          </div>
        
      </div>
     
    </div>
  )
}

export default Contato
