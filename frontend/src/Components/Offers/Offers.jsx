import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.jpg'
import arrow_icon from '../Assets/arrow.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <hr />
        <h1>Novas Ofertas na BikeUrban!</h1>
        <p> Na BikeUrban, sabemos que cada pedalada é importante, e por isso estamos oferecendo descontos imperdíveis em nossa linha de bicicletas urbanas.</p>
        <div className="offers-btn">
            <div>Ver Mais</div>
            <img src={arrow_icon} alt="" />
        </div>
        <hr />
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />

      </div>
    </div>
  )
}

export default Offers
