import { connect } from "react-redux"

import { CheckoutPage } from "../pages/checkout-page/checkout-page"

import { cartItemsSumPriceSelector } from "../redux/selectors/cart-selectors"

const mapStateToProps = (state) => {
    return {
        sumPrice: cartItemsSumPriceSelector(state),
        items: state.cartItems
    }
}

export default connect(mapStateToProps)(CheckoutPage)