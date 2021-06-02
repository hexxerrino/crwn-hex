import React from "react"

import {
    StyledCartItem,
    ItemDetails 
} from "./cart-item.styles"

export const CartItem = (data) => {
    const { imageUrl, name, count, price } = data.item

    return (
        <StyledCartItem>
            <img alt="item" src={imageUrl}></img>
            <ItemDetails>
                <span>{name}</span>
                <span>{count} X ${price}</span>
            </ItemDetails>
        </StyledCartItem>
    )
}