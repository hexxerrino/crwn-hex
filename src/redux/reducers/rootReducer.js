import { combineReducers } from "redux"

import userReducer from "./user-reducer/userReducer"
import cartPopupReducer from "./cart-popup/cart-popup.reducer"
import cartItemsReducer from "./cart-items/cart-items.reducer"
import shopDataReducer from "./shop-data/shop-data.reducer"
import DirectoryReducer from "./directory/directory.reducer"

const reducer = combineReducers({
    user: userReducer,
    cartPopup: cartPopupReducer,
    cartItems: cartItemsReducer,
    shopData: shopDataReducer,
    directory: DirectoryReducer
})

export default reducer