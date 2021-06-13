import { takeLatest, call, put, all } from 'redux-saga/effects'

import { signInWithGoogle, addNewUserIfNewUser, auth, getCurrentUser, firestore } from "../../../firebase/firebase.config"

import { logoutUserFailure, logoutUserSuccess, userLoginFailure, userLoginSuccess } from "../../actions/user-actions"

import { userActionTypes } from "../../action-types/user-action-types"

function* fetchUserGoogle() {
    try {
        const userObj = yield call(signInWithGoogle)
        const userRef = yield call(addNewUserIfNewUser, userObj.user)
        const user = yield call(userRef.get.bind(userRef))
        yield put(userLoginSuccess({id: user.id, ...user.data()}))
    } catch (error) {
        yield put(userLoginFailure(error))
    }
}
  
function* fetchUserLocal(action) {
    try {
        const { email, password } = action.payload
        const userObj = yield call(auth.signInWithEmailAndPassword.bind(auth), email, password)
        const userRef = yield call(addNewUserIfNewUser, userObj.user)
        const user = yield call(userRef.get.bind(userRef))
        yield put(userLoginSuccess({id: user.id, ...user.data()}))
    } catch (error) {
        yield put(userLoginFailure(error))
    }
}

function* updateStateIfLoggedIn() {
    try {
        const user = yield getCurrentUser()
        const docRef = firestore.collection("users").doc(user.uid)
        const doc = yield docRef.get()
        yield put(userLoginSuccess({id: doc.id, ...doc.data()}))
    } catch (error) {
        yield put(userLoginFailure(error))
    }
}

function* userLogout() {
    try {
        yield auth.signOut()
        yield put(logoutUserSuccess())
    } catch (error) {
        console.log(error)
        put(logoutUserFailure())
    }
}

export function* userSaga() {
    yield all([
        takeLatest(userActionTypes.USER_LOGIN_GOOGLE_START, fetchUserGoogle),
        takeLatest(userActionTypes.USER_LOGIN_LOCAL_START, fetchUserLocal),
        takeLatest(userActionTypes.USER_UPDATE_STATE, updateStateIfLoggedIn),
        takeLatest(userActionTypes.USER_LOGOUT_START, userLogout)
    ]) 
}