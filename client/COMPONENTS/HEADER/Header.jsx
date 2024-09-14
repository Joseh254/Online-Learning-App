import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../src/assets/image1.png'
function Header() {
  return (
    <div>
        <img src={logo} alt={logo} className='logo' />
        <Link to={'/'}>Home</Link>
        <Link to={'/Footer'}>Footer</Link>

    </div>
  )
}

export default Header