import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'

function Header({ currentUser }) {
  return (
    <header className='header'>
      <Link to='/'className='logo-container'>
        <Logo className='logo'/>
      </Link>
      <nav className='options'>
        <NavLink to='/shop' className='option'>SHOP</NavLink>
        <NavLink to='/contact' className='option'>CONTACT</NavLink>
        {
          currentUser ? 
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
          <NavLink to="/signin" className='option'>SIGN IN</NavLink>
        }
      </nav>
    </header> 
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);