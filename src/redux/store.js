import { createStore } from "redux"

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducer from "./reducers/rootReducer"

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cartItems'] // only navigation will be persisted
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer)
export const persistor = persistStore(store)

export default store