const cartItemsReducer = (state = [], action) => {
    if (action.type === "ADD-CART-ITEM") {
        let isItemInCart = false
        const newState = state.map((item) => {
            if (item.id === action.item.id) {
                isItemInCart = true
                return {...item, count: item.count + 1}
            } else {
                return {...item}
            }
        })

        if (isItemInCart === true) { return newState }
        newState.push({...action.item, count: 1})
        return newState
    } else if (action.type === "REMOVE-CART-ITEM") {
        const newState = []
        state.forEach((item) => {
            if (item.id !== action.id) {newState.push(item); return}
            if (item.count > 1) {newState.push({...item, count: item.count - 1}); return}
        })
        return newState
    } else if (action.type === "CLEAR-CART-ITEM") {
        return state.filter(item => item.id !== action.id)
    } else {
        return state
    }
}

export default cartItemsReducer