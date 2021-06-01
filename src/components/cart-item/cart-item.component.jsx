import React from "react"

import "./cart-item.styles.scss"

export const CartItem = (data) => {
    const { imageUrl, name, count, price } = data.item
    console.log(data)

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