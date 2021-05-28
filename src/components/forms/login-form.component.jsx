import React, { Component } from "react"

import { ButtonComponent } from "../button-component/button.component"
import { InputComponent } from "../input-component/input.component"
import { auth, signInWithGoogle } from "../../firebase/firebase.config"

import "./login-form.styles.scss"

export class LoginForm extends Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        const [email, password] = event.target
        await auth.signInWithEmailAndPassword(email.value, password.value)

        this.setState({email: "", password: ""})
    }

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an accaout :)</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <InputComponent 
                    handleChange={this.handleChange} 
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    required={true}
                    label="Email" />
                    <InputComponent 
                    handleChange={this.handleChange} 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    required={true}
                    label="Password" />
                    <div className="buttons">
                        <ButtonComponent type="submit">Sign in</ButtonComponent>
                        <ButtonComponent google="true" onClick={signInWithGoogle}>
                        {' '}
                        Sign in with Google{' '}
                        </ButtonComponent>
                    </div>
                </form>
            </div>
        )
    }
}