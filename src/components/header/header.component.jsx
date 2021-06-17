import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import './header.styles.scss'

import { ReactComponent as Logo } from '../../assets/crown.svg'

function Header(props) {
  return (
    <header className='header'>
      <Link to='/'className='logo-container'>
        <Logo className='logo'/>
      </Link>
      <nav className='options'>
        <NavLink to='/shop' className='option'>SHOP</NavLink>
        <NavLink to='/contact' className='option'>CONTACT</NavLink>
      </nav>
    </header>
  );
}

export default Header;