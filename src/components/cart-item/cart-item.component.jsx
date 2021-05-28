import React from "react"

import "./cart-item.styles.scss"

export const CartItem = ({item}) => {
    const { imageUrl, name, count, price } = item

    return (
        <div className="cart-item">
            <img alt="item" src={imageUrl}></img>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{count} X ${price}</span>
            </div>
        </div>
    )
}