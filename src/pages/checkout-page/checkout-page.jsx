import React from "react"
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component"
import CheckoutItem from "../../containers/checkout-item.container"

import "./checkout-page.styles.scss"

export const CheckoutPage = ({items, sumPrice}) => {
    return (
        <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    
      {items.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />
      })}
      
    <div className='total'>TOTAL: ${sumPrice}</div>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
    </div>
    <StripeCheckoutButton price={sumPrice} />
  </div>
    )
}