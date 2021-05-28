import React from "react"

import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CartIcon = ({onClick, count}) => {
    return(
        <div className='cart-icon' onClick={onClick}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{count}</span>
        </div>
  )
}