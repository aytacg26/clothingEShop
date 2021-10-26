import React from 'react';
import './Loader.scss';

const Loader = () => {
  return (
    <div className='loader-container'>
      <div className='lds-hourglass'></div>
    </div>
  );
};

export default Loader;
