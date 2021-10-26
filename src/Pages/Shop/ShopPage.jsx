import React, { Component } from 'react';
import SHOP_DATA from '../../data/shop.data';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import './ShopPage.scss';

class ShopPage extends Component {
  timer;

  constructor(props) {
    super(props);

    this.state = {
      collections: [],
    };
  }

  componentDidMount() {
    //We are mimicing the request from server and response lateness
    this.timer = setTimeout(() => {
      console.log('Timer is working...');
      this.setState({ collections: SHOP_DATA });
    }, 300);
  }

  componentWillUnmount() {
    console.log('Unmounting the timer...');
    clearTimeout(this.timer);
  }

  render() {
    const { collections } = this.state;

    if (this.state.collections.length === 0) {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }

    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;