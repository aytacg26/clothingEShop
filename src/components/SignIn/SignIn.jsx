import React, { Component } from 'react';
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

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    this.setState({ email: '', password: '' });
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
          <input
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.inputHandler}
          />
          <label>Email</label>
          <input
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.inputHandler}
          />
          <label>Password</label>
          <input type='submit' value='Sign in' />
        </form>
      </div>
    );
  }
}

export default SignIn;
