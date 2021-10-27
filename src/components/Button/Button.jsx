import React from 'react';
import './Button.scss';

//@TODO : isGoogleSignIn prop is not a good idea, I must find more general styling way
const Button = ({ children, isGoogleSignIn, ...otherProps }) => {
  const buttonClass = `${isGoogleSignIn && 'google-sign-in'} custom-button`;

  return (
    <button className={buttonClass} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
