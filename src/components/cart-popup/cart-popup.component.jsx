import React from "react"

import { ButtonComponent } from "../button-component/button.component"
import { CartItem } from "../cart-item/cart-item.component"
import { withRouter } from "react-router-dom"

import "./cart-popup.styles.scss"
import { cartPopupAction } from "../../redux/actions/cart-actions"

const CartPopup = ({items, history, dispatch}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {items.map((item) => {return <CartItem key={item.id} item={item} />})}
            </div>
            <ButtonComponent onClick={
                () => {
                    history.push("/checkout")
                    dispatch(cartPopupAction())
                }
            }>GO TO CHECKOUT
            </ButtonComponent>
        </div>
    )
}

export default withRouter(CartPopup)