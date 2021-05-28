import { connect } from "react-redux"
import { CheckoutItem } from "../components/checkout-item/checkout-item.component"
import { addCartItem, removeCartItem, clearCartItem } from "../redux/actions/actions"

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => {dispatch(addCartItem(item))},
        removeItem: (id) => {dispatch(removeCartItem(id))},
        clearItem: (id) => {dispatch(clearCartItem(id))}
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        cartItem: ownProps.cartItem
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem)