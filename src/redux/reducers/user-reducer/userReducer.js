import { userActionTypes } from "../../action-types/user-action-types"

const initialState = {
    user: {},
    error: null
}

const userReducer = (state = initialState, action) => {
    if (action.type === userActionTypes.USER_LOGIN_SUCCESS) {
        return {
            ...state,
            user: {...action.payload}
        }
    } else if (action.type === userActionTypes.USER_LOGIN_FAILURE) {
        return {
            user: {},
            error: action.payload
        }
    } else if (action.type === userActionTypes.USER_LOGOUT_SUCCESS) {
        return {
            user: {},
            error: null
        }
    } else if (action.type === userActionTypes.USER_LOGOUT_FAILURE) {
        return {
            ...state,
            error: action.payload
        }
    } else {
        return state
    }
}

export default userReducer