import { shopDataActionTypes } from "../action-types/shop-data-action-types";

export const fetchShopDataStart = () => {
    return {
        type: shopDataActionTypes.FETCH_SHOP_DATA_START
    }
}
export const fetchShopDataSuccess = (data) => {
    return {
        type: shopDataActionTypes.FETCH_SHOP_DATA_SUCCESS,
        payload: data
    }
}
export const fetchShopDataFailure = (error) => {
    return {
        type: shopDataActionTypes.FETCH_SHOP_DATA_FAILURE,
        payload: error
    }
}