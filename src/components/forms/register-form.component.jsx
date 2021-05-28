import React, { Component } from "react"

import { ButtonComponent } from "../button-component/button.component"
import { InputComponent } from "../input-component/input.component"
import { auth } from "../../firebase/firebase.config"

import "./login-form.styles.scss"

export class RegisterForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            confirmPass: "",
            username: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const [email, username, password, confirmPass] = event.target

        if(password.value !== confirmPass.value) {alert("pass doesn't match"); return}

        auth.createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            user.updateProfile({
                displayName: username.value
            })
            .then(() => {this.setState({email: "", password: "", confirmPass: "", username: ""})})
            .catch((error) => {console.log(error)})
          })
          .catch((error) => {
            console.log(error)
          });
    }

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({[name]: value})
    }

    render() {
        return (
        <div className="sign-in">
                <h2 className="title">I want to register :)</h2>
                <span>Please Register with email and password</span>
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
                    name="username" 
                    type="text" 
                    value={this.state.username} 
                    required={true}
                    label="Username" />
                    <InputComponent 
                    handleChange={this.handleChange}  
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    required={true}
                    label="Password" />
                    <InputComponent 
                    handleChange={this.handleChange}  
                    name="confirmPass" 
                    type="password" 
                    value={this.state.confirmPass} 
                    required={true}
                    label="Confirm Password" />
                    <div className="buttons">
                        <ButtonComponent type="submit">Register</ButtonComponent>
                    </div>
                </form>
            </div>
        )
    }
}