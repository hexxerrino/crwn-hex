import { shopDataActionTypes } from "../../action-types/shop-data-action-types"

const INITIAL_STATE = {data: null, error: null}

const shopDataReducer = (state = INITIAL_STATE, action) => {
    if (action.type === shopDataActionTypes.FETCH_SHOP_DATA_SUCCESS) {
        return {
            data: action.payload,
            error: null
        }
    } else if (action.type === shopDataActionTypes.FETCH_SHOP_DATA_FAILURE) {
        return {
            data: null,
            error: action.payload
        }
    } else {
        return state
    }
}

export default shopDataReducer