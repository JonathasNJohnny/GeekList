import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'
import './LoginSignup.css';

export const LoginSignup = () => {

  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [showBackToLogin, setShowBackToLogin] = useState(false);
  const [showRegisterOptions, setShowRegisterOptions] = useState(true);
  const [showLoginButton, setShowLoginButton] = useState(true)
  const [showRegisterButton, setShowRegisterButton] = useState(false)
  const [formTitle, setFormTitle] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleRegisterLinkClick = () => { 
    setShowRepeatPassword(true);
    setShowBackToLogin(true);
    setShowRegisterOptions(false);
    setShowRegisterButton(true)
    setShowLoginButton(false)
    setFormTitle('Register');
  };

  const handleBackToLoginLinkClick = () => {
    setShowBackToLogin(false);
    setShowRepeatPassword(false);
    setShowRegisterOptions(true);
    setShowRegisterButton(false)
    setShowLoginButton(true)
    setFormTitle('Login');
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      toast.warn("Por favor, insira um email válido.")
      return;
    }
    if (password.length < 8) {
      toast.warn("A senha deve conter pelo menos 8 caracteres.")
      return;
    }
    try {
      const response = await axios.post('/api/login', { email, password });
      if (response.data != "error"){
        toast.success("Login Realizado com Cucesso!")
      }
      else {
        toast.error("Email ou Senha Inválidos!")
      }
      console.log(response.data);
    } catch (error) {}
  };

  const handleRegister = async () => {
    if (!validateEmail(email)) {
      toast.warn("Por favor, insira um email válido.")
      return;
    }
    if (password.length < 8) {
      toast.warn("A senha deve ter pelo menos 8 caracteres.")
      return;
    }
    if (password !== repeatPassword) {
      toast.warn("As senhas digitadas devem ser iguais nos 2 campos.")
      return;
    }
    try {
      const response = await axios.post('/api/register', { email, password });
      if (response.data == "success") {
        toast.success("Usuário cadastrado com sucesso!")
      }
      else {
        toast.error("O Email digitado já esta em uso!")
      }
      console.log(response.data);
    } catch (error) {}
  };

  return (
    <div>
      <ToastContainer/>
      <div className='loginBox'>
        <h2>{formTitle}</h2>
        <input type='text' name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <input type='password' name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        {showRepeatPassword && <input type='password' name='repeatPassword' placeholder='Repeat Password' className='repeatPassword' onChange={(e) => setRepeatPassword(e.target.value)}/>}
        {showLoginButton && <input type='submit' value='Login' className='loginButton' onClick={handleLogin}/>}
        {showRegisterButton && <input type='submit' value='Register' className='registerButton' onClick={handleRegister}/>}<br/>
        {showRegisterOptions && (
          <>
            <a href='#' className='forgotPasswordLink'>Forgot Password</a><br/>
            <a href='#' className='registerLink' onClick={handleRegisterLinkClick}>Register</a>
          </>
        )}
        {showBackToLogin && <a href='#' className='backToLoginLink' onClick={handleBackToLoginLinkClick}>Back To Login</a>}
      </div>
    </div>
  )
}

export default LoginSignup;