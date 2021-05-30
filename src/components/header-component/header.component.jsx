import React from "react"

import { Link } from "react-router-dom"

import { auth } from "../../firebase/firebase.config"

import CartIcon from "../../containers/cart-icon.container"
import CartPopup from "../../containers/cart-popup.container"

import { ReactComponent as Logo } from "../../assets/crown.svg"
import "./header.styles.scss"

export const Header = ({user, cartPopup}) => {
    return (
        <div className="header">
            <div className="logo-container">
                    <Link to="/">
                        <Logo />
                    </Link>
            </div>
            <div className="options">
                    <Link className="option" to="/shop">
                        SHOP
                    </Link>
                    <Link className="option" to="/">
                        CONTACT
                    </Link>
                    { user.id ? (
                    <div onClick={() => {auth.signOut()}} className="option">SIGN OUT</div>
                    ) : (<Link className="option" to="/auth">
                        SIGN IN
                    </Link>)}
                    <CartIcon />
            </div>
            { cartPopup ? <CartPopup /> : null} 
        </div>
    )
}

