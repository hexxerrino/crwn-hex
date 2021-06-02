import React from "react"

import { Link } from "react-router-dom"

import { auth } from "../../firebase/firebase.config"

import CartIcon from "../../containers/cart-icon.container"
import CartPopup from "../../containers/cart-popup.container"

import { ReactComponent as Logo } from "../../assets/crown.svg"

import { 
    StyledHeader,
    LogoContainer,
    Options,
    Option
 } from "./header.styles"

export const Header = ({user, cartPopup}) => {
    return (
        <StyledHeader>
            <LogoContainer>
                    <Link to="/">
                        <Logo />
                    </Link>
            </LogoContainer>
            <Options>
                    <Option className="option" to="/shop">
                        SHOP
                    </Option>
                    <Option className="option" to="/">
                        CONTACT
                    </Option>
                    { user.id ? (
                    <Option as="div" onClick={() => {auth.signOut()}} className="option">SIGN OUT</Option>
                    ) : (<Option className="option" to="/auth">
                        SIGN IN
                    </Option>)}
                    <CartIcon />
            </Options>
            { cartPopup ? <CartPopup /> : null} 
        </StyledHeader>
    )
}

