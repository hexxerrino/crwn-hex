import { createStore, applyMiddleware } from "redux"

import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/rootSaga"

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducer from "./reducers/rootReducer"

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cartItems'] // only navigation will be persisted
}

const persistedReducer = persistReducer(persistConfig, reducer)

const sagaMiddleware = createSagaMiddleware()

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default store