import React, { useState } from 'react';
import './Signup.css'; // Import the CSS file for styling\\
import {useNavigate} from 'react-router-dom';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const nav = useNavigate()

  function handelClick(){
    nav('/Login')
  }
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setFullName('')
    setEmail('')
    setPassword('')
    // Add your signup logic here
    console.log('Signup submitted:', [fullName, email, password ]);
  };

  return (
    <div  className="signup-main">
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input type="text" value={fullName} onChange={handleFullNameChange} required />
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
        <button type="submit">Sign Up</button>
      </form>
      <h4> Already you have an Account ? <span className="Login" onClick={handelClick}>Log In</span></h4>
    </div>
    </div>
  );
};

export default Signup;
