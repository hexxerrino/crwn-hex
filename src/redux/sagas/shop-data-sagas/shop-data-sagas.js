import { takeLatest, call, put, all } from 'redux-saga/effects'

import { firestore, stateFromDatabase } from '../../../firebase/firebase.config'

import { shopDataActionTypes } from '../../action-types/shop-data-action-types'

import { fetchShopDataSuccess, fetchShopDataFailure } from '../../actions/shop-data-actions'

export function* fetchShopDataStartSaga() {
    try {
        const colSnapshot = yield call(firestore.collection("shopItems").get.bind(firestore.collection("shopItems")))
        const state = stateFromDatabase(colSnapshot)
        yield put(fetchShopDataSuccess(state))
    } catch (error) {
        fetchShopDataFailure(error)
    }
}

export function* shopDataSaga() {
    yield all([
        takeLatest(shopDataActionTypes.FETCH_SHOP_DATA_START, fetchShopDataStartSaga)
    ])
}