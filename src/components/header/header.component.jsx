import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'

function Header({ currentUser, hidden }) {
  return (
    <header className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo'/>
      </Link>
      <nav className='options'>
        <Link to='/shop' className='option'>SHOP</Link>
        <Link to='/contact' className='option'>CONTACT</Link>
        { 
          currentUser 
            ? <div 
                className='option' 
                onClick={() => auth.signOut()}
              >
                SIGN OUT
              </div> 
            : <Link to="/signin" className='option'>
                SIGN IN
              </Link>
        }
        <CartIcon />
      </nav>
      { hidden ? null : <CartDropdown /> }
    </header> 
  );
}

/*
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
});
*/

// less code - advanced js feature
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);