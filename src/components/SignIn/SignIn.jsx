import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './SignIn.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;

    if (email.trim().length !== 0 && password.trim().length !== 0) {
      try {
        await auth.signInWithEmailAndPassword(email, password);

        this.setState({ email: '', password: '' });
        this.props.history.push('/');
      } catch (error) {
        if (error.code === 'auth/wrong-password') {
          alert(`The email or password is invalid.`);
          return;
        }
      }
    } else {
      alert('Please enter email and password');
    }
  }

  inputHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='Email'
            name='email'
            value={this.state.email}
            onChange={this.inputHandler}
          />
          <FormInput
            label='Password'
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.inputHandler}
          />
          <div className='buttons'>
            <Button type='submit'>Sign In</Button>
            <Button type='button' onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
