import { userActionTypes } from "../action-types/user-action-types"

export const userLoginGoogleStart = () => {
    return {
        type: userActionTypes.USER_LOGIN_GOOGLE_START
    }
}
export const userLoginLocalStart = (user) => {
    return {
        type: userActionTypes.USER_LOGIN_LOCAL_START,
        payload: user
    }
}
export const userLoginSuccess = (user) => {
    return {
        type: userActionTypes.USER_LOGIN_SUCCESS,
        payload: user
    }
}
export const userLoginFailure = (error) => {
    return {
        type: userActionTypes.USER_LOGIN_FAILURE,
        payload: error
    }
}
export const logoutUserStart = () => {
    return {
        type: userActionTypes.USER_LOGOUT_START
    }
}
export const logoutUserSuccess = () => {
    return {
        type: userActionTypes.USER_LOGOUT_SUCCESS
    }
}
export const logoutUserFailure = () => {
    return {
        type: userActionTypes.USER_LOGOUT_FAILURE
    }
}
export const userUpdateState = () => {
    return {
        type: userActionTypes.USER_UPDATE_STATE
    }
}