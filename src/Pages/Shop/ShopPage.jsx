import React, { Component } from 'react';
import SHOP_DATA from '../../data/shop.data';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import Loader from '../../components/Loader/Loader';
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
      this.setState({ collections: SHOP_DATA });
    }, 300);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { collections } = this.state;

    if (this.state.collections.length === 0) {
      return <Loader />;
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
