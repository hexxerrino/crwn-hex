import { all } from 'redux-saga/effects'

import { userSaga } from "./user-sagas/user-auth-sagas"
import { shopDataSaga } from './shop-data-sagas/shop-data-sagas'

export default function* rootSaga() {
    yield all([
      userSaga(),
      shopDataSaga()
    ])
    // code after all-effect
  }