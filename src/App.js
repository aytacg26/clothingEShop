import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import AboutPage from './Pages/About/AboutPage';
import ShopPage from './Pages/Shop/ShopPage';
import NotFound from './Pages/NotFound/NotFound';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
