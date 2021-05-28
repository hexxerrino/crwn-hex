const cartPopup = (state = false, action) => {
    if (action.type === "CART-POPUP") {
        const newState = !state
        return newState
    } else {
        return state
    }
}

export default cartPopup