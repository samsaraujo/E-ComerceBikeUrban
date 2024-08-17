import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Receba Ofertas Exclusivas No Seu E-mail.</h1>
      <p>Assine para receber novas ofertas e fique atualizado.</p>
      <div>
        <input type="email" placeholder='   Seu endereço de E-mail'/>
        <button>Assine Aqui</button>
      </div>
    </div>

  )
}

export default NewsLetter
