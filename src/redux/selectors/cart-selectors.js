import { createSelector } from "reselect"

const cartItemsSelector = state => state.cartItems

export const cartItemsSumSelector = createSelector(
    cartItemsSelector,
    items => items.reduce((acc, item) => acc + item.count, 0)
)

export const cartItemsSumPriceSelector = createSelector(
    cartItemsSelector,
    items => items.reduce((acc, item) => acc + item.count * item.price, 0)
)