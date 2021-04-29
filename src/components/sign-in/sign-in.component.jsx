import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component'
import {signInWithGoogle } from '../../firebase/firebase.utils'
import './sign-in.styles.scss';

class SignIn extends React.Component{

    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit = event=>{
        event.preventDefault();
        this.setState({'email':'',password:''})
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value})

    }

    render(){
        return (
            <div className='sign-in'>
                <h2>Sign in</h2>
                <span>I already have an account</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        label='email'
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        required />
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='password'
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required />
            <div className='buttons'>
                    <CustomButton type='submit' > Submit</CustomButton>

                    <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}> Sign in with Google</CustomButton>
            </div>
                </form>
            </div>
        )
    }

}

export default SignIn;