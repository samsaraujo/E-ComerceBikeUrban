import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import header_w22 from '../Assets/header_w22.jpg'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <hr />
        <h2>Descubra a Liberdade sobre Duas Rodas.</h2>
        <div>
            <p>Na BikeUrban, oferecemos uma vasta seleção de modelos de alta qualidade que combinam desempenho, conforto e estilo.</p>
        </div>
        <div className="hero-latest-btn">
            <div>Ultima Coleção</div>
            <img src={arrow_icon} alt="" />
        </div>
        <hr />
      </div>
      <div className="hero-righ">
         <img className='hero-img' src={header_w22} alt="" />
      </div>
    </div>

  )
}

export default Hero
