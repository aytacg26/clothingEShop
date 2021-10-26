import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/shopping.png';
import './Header.scss';

const Header = () => {
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
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/about-us'>
          ABOUT
        </Link>
        <Link className='option' to='/contect-us'>
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
