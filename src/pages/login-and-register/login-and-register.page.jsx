import React from "react"

import LoginForm from "../../containers/login-form.container"
import RegisterForm from "../../containers/register-form.container"

import "./login-and-register.styles.scss"

export const LoginRegisterPage = () => {
    return (
        <div className="login-register">
            <LoginForm />
            <RegisterForm />
        </div>
    )
}