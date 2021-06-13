import React from "react"

import LoginForm from "../../containers/login-form.container"
import { RegisterForm } from "../../components/forms/register-form.component"

import "./login-and-register.styles.scss"

export const LoginRegisterPage = () => {
    return (
        <div className="login-register">
            <LoginForm />
            <RegisterForm />
        </div>
    )
}