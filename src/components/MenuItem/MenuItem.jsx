import React from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.scss';

const MenuItem = ({
  title,
  subtitle,
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className='background-image'
      ></div>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>{subtitle}</span>
      </div>
    </div>
  );
};

MenuItem.defaultProps = {
  subtitle: 'SHOP NOW',
};

export default withRouter(MenuItem);
