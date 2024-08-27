import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
  
    <div className='loginsignup'>

      <div className="loginsignup-container">
        <h1>Inscreva-se</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Seu Nome'/>
          <input type="email" placeholder='Endereço de Email' />
          <input type="password" placeholder='Senha' />
        </div>
        <button>Continuar</button>
        <p className="loginsignup-login">Já possui uma conta? <span>Faça o Login Aqui</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>Ao continuar, concordo com os termos de uso e política de privacidade.</p>
        </div>
      </div>
    </div>
  )}

  export default LoginSignup