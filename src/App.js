import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import AboutPage from './Pages/About/AboutPage';
import ShopPage from './Pages/Shop/ShopPage';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';

const NotFound = lazy(() => import('./Pages/NotFound/NotFound'));
const SignInPage = lazy(() => import('./Pages/SignInPage/SignInPage'));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            authUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ authUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.authUser} />

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/sign-in' component={SignInPage} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
