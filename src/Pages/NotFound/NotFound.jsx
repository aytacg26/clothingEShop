import React from 'react';
import notFound from '../../assets/images/404.png';
import './NotFound.scss';

const NotFound = (props) => {
  return (
    <div className='not-found-container'>
      <img src={notFound} alt='Page not found' width='260' />
      <h1>ARE YOU HAPPY NOW?</h1>
      <p>we couldn't find that page.</p>
    </div>
  );
};

export default NotFound;
