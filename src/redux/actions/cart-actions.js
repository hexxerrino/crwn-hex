export const cartPopupAction = () => {
    return {
        type: "CART-POPUP"
    }
}

export const addCartItem = (item) => {
    return {
        item: item,
        type: "ADD-CART-ITEM"
    }
}

export const removeCartItem = (id) => {
    return {
        id: id,
        type: "REMOVE-CART-ITEM"
    }
}

export const clearCartItem = (id) => {
    return {
        id: id,
        type: "CLEAR-CART-ITEM"
    }
}

export const cartIconNumberPlus = () => {
    return {
        type: "CART-ICON-NUMBER-PLUS",
    }
}

export const cartIconNumberMinus = () => {
    return {
        type: "CART-ICON-NUMBER-MINUS",
    }
}

export const setShopData = (data) => {
    return {
        type: "SET-DATA",
        data: data
    }
}