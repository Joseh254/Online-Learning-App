import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logo from '../../src/assets/image1.png'
function Header() {
const navigate =useNavigate()

  function handleNavigateLogin(){
navigate('/Login')
  }
  return (
    <div className='header'>
        <img src={logo} alt={logo} className='logo' />
        <input type="text" placeholder='Search for anything' className='headerSearchInput' />
        <Link to={'/Enrollment'} style={{textDecoration:'none',color:'#000',fontSize:'1.9rem'}}>Enrollment</Link>
        <Link to={'/TeachWiithUs'} style={{textDecoration:'none',color:'#000',fontSize:'1.9rem'}}>Teach with Us</Link>
        <button style={{padding:'1rem', backgroundColor:'#fff'}}onClick={handleNavigateLogin}>Log in</button>
        <button style={{padding:'1rem', backgroundColor:"#000", color:"#fff"}}>Sign up</button>

    </div>
  )
}

export default Header