import React, { Component } from 'react';
import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ email: '', password: '' })
  }

  render() {
    const { email, password } = this.state
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with email and password</span>
        
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            onChange={this.handleChange} 
            type="email" 
            name="email" 
            value={email} 
            label="Email" 
            required
          />
          <FormInput 
            onChange={this.handleChange} 
            type="password" 
            name="password" 
            value={password} 
            label="Password" 
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;