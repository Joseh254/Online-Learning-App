import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import logo from '../../src/assets/image1.png';

function Header() {
  const navigate = useNavigate();

  function handleNavigateLogin() {
    navigate('/Login');
  }

  function handleNavigateSignup() {
    navigate('/Signup');
  }

  return (
    <div className='header'>
      <img src={logo} alt='Logo' className='logo' />
      <div className='searchWrapper'>
        <FaSearch className='searchIcon' />
        <input
          type="text"
          placeholder='Search for anything'
          className='headerSearchInput'
        />
      </div>
      <Link to='/Enrollment' className='navLink'>Enrollment</Link>
      <Link to='/TeachWiithUs' className='navLink'>Teach with Us</Link>
      <button className='loginButton' onClick={handleNavigateLogin}>Log in</button>
      <button className='signupButton' onClick={handleNavigateSignup}>Sign up</button>
    </div>
  );
}

export default Header;
