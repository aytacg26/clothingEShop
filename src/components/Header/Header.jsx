import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/shopping.png';
import { auth } from '../../firebase/firebase.utils';
import './Header.scss';

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <img
          src={logo}
          alt='eCloth Logo'
          className='logo'
          width='50'
          height='50'
          title='By vecteezy.com'
        />
      </Link>
      <div className='options'>
        <Link className='option' to='/'>
          HOME
        </Link>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/about-us'>
          ABOUT
        </Link>
        <Link className='option' to='/contect-us'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/sign-in'>
            SIGN IN
          </Link>
        )}
        {currentUser && (
          <div className='user-section'>
            {currentUser.photoURL && (
              <img src={currentUser.photoURL} alt={currentUser.displayName} />
            )}
            <span>{currentUser.displayName}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
