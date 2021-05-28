import { connect } from "react-redux"

import CartPopup from "../components/cart-popup/cart-popup.component"

const mapStateToProps = (state) => {
    return {
        items: state.cartItems
    }
}

export default connect(mapStateToProps)(CartPopup)