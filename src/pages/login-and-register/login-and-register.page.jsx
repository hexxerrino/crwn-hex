import React from "react"

import {LoginForm} from "../../components/forms/login-form.component"
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