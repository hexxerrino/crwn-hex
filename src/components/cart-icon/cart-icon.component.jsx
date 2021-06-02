import React from "react"

import { 
    StyledCartIcon,
    StyledShoppingIcon,
    ItemCount
} from "./cart-icon.styles"

export const CartIcon = ({onClick, count}) => {
    return(
        <StyledCartIcon onClick={onClick}>
            <StyledShoppingIcon />
            <ItemCount>{count}</ItemCount>
        </StyledCartIcon>
  )
}