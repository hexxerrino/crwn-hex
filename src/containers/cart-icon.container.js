import { connect } from "react-redux"

import { CartIcon } from "../components/cart-icon/cart-icon.component"

import { cartPopupAction } from "../redux/actions/cart-actions"

import { cartItemsSumSelector } from "../redux/selectors/cart-selectors"

const mapStateToProps = (state) => {
    return {
        count: cartItemsSumSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(cartPopupAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)