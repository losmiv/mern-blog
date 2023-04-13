import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../img/logo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className='links'>
          <Link className='link' to="/?cat=art">
            <div className='category'>
              <h6>ART</h6>
            </div>
          </Link>
          <Link className='link' to="/?cat=science">
            <div className='category'>
              <h6>SCIENCE</h6>
            </div>
          </Link>
          <Link className='link' to="/?cat=tech">
            <div className='category'>
              <h6>TECH</h6>
            </div>
          </Link>
          <Link className='link' to="/?cat=economy">
            <div className='category'>
              <h6>ECONOMY</h6>
            </div>
          </Link>
          <Link className='link' to="/?cat=politics">
            <div className='category'>
              <h6>POLITICS</h6>
            </div>
          </Link>
          <span>John</span>
          <span>Logout</span>
          <Link className='link' to="/write">
            <span className='write'>
              <Link className='link' to="/write">Write</Link>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
