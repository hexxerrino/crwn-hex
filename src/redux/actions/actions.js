export const userAction = (user) => {
    return {
        type: "CHANGE-USER",
        user: user,
    }
}

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

export const changeAllShopData = (data) => {
    return {
        type: "CHANGE-ALL-DATA",
        data: data
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

