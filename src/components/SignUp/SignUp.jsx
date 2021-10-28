import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './SignUp.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match');
      return;
    }

    //@TODO : Not a good validation, create validation funcs especially for email and password
    if (
      displayName.trim().length > 0 &&
      email.trim().length > 0 &&
      email.includes('@') &&
      password.trim().length >= 6 &&
      confirmPassword.trim().length >= 6
    ) {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );

        createUserProfileDocument(user, { displayName });

        this.setState({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      } catch (error) {
        //TODO : use switch-case
        if (error.code === 'auth/email-already-in-use') {
          alert(`The email address ${email} already exists.`);
          return;
        }

        if (error.code === 'auth/invalid-email') {
          alert(`Email address ${email} is invalid`);
          return;
        }
      }
    } else {
      alert('Please fill the form, name, email and password are required');
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign Up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            label='Name'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='email'
            label='Email'
            name='email'
            value={email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            label='Password'
            name='password'
            value={password}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            label='Confirm Password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />
          <Button type='submit'>SIGN UP</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
