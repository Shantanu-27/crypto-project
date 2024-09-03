import React from 'react'
import './Header.css'
import AnchorTemporaryDrawer from './Drawer'
import Button from '../Button/Button'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate= useNavigate();

  const goToDashboard=()=>{
    navigate('/dashboard')
  }
  return (
    <div className="navbar">
        <h1 className='logo'>
            CryptoTracker<span style={{color:"var(--blue)"}}>.</span>
        </h1>
        <div className='links'>
            <Link to="/">
            <p className="link">Home</p>
            </Link>
            <Link to="/compare">
            <p className="link">Compare</p>
            </Link>
            <Link to="/watchlist">
            <p className="link">Watchlist</p>
            </Link>
            <Link to="/dashboard">
            <Button text={"Dashboard"} outlined={true} onClick={goToDashboard} />
            </Link>
        </div>
        <AnchorTemporaryDrawer />
    </div>
  )
}

export default Header;