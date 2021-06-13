import { all } from 'redux-saga/effects'

import { userSaga } from "./user-sagas/user-auth-sagas"

export default function* rootSaga() {
    yield all([
      userSaga()
    ])
    // code after all-effect
  }