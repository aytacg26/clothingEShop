import React, { Component } from 'react';
import SECTIONS_DATA from '../../data/sections.data';
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';

class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: SECTIONS_DATA,
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
