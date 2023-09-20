import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling
// import {Navigate} from './react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const nevigate = useNavigate()

  function handleClickJoinUsBtn () {
    nevigate('/Signup')
}

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Login submitted:', { email, password });
  };

  return (
    <div className="login-main">
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
        <button type="submit">Login</button>
        <h3>Don't have an account ? <span className='Signup-Navigate' onClick={handleClickJoinUsBtn}>Sign Up</span> </h3>
      </form>
    </div>
    </div>
  );
};

export default Login;
