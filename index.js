import React, { useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function SignUp({ toggleForm }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rePasswordError, setRePasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!name) {
      setNameError('Name is required');
      valid = false;
    } else {
      setNameError('');
    }

    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (password !== rePassword) {
      setRePasswordError('Passwords do not match');
      valid = false;
    } else {
      setRePasswordError('');
    }

    if (valid) {
      console.log('Name:', name);
      console.log('Email:', email);
    }
  };

  return (
    <div className="centered-container">
    <div className="box">
     <form onSubmit={handleSubmit}>
     <span className="text-center">Sign Up</span>
     <div className="input-container">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Full Name</label>
            {nameError && <p className="error-message">{nameError}</p>}
      </div>
          <div className="input-container">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
            {emailError && <p className="error-message">{emailError}</p>}
      </div>
          <div className="input-container password-container">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
            <span onClick={() => setShowPassword(!showPassword)} className="eye-icon">
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </span>
            {passwordError && <p className="error-message">{passwordError}</p>}
       </div>
      <div className="input-container password-container">
            <input
              type={showRePassword ? "text" : "password"}
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              required
            />
            <label>Re-enter Password</label>
            <span onClick={() => setShowRePassword(!showRePassword)} className="eye-icon">
              <FontAwesomeIcon icon={showRePassword ? faEye : faEyeSlash} />
            </span>
            {rePasswordError && <p className="error-message">{rePasswordError}</p>}
          </div>
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <p>Already a member? <span onClick={toggleForm} className="toggle-link">Login Here</span></p>
    </div>
   </div>
  );
}

export default SignUp;
