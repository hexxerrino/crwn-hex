import { connect } from "react-redux"

import { CollectionItem } from "../components/collection-item/collection.item.component"

import { addCartItem, cartIconNumberPlus } from "../redux/actions/actions"

const mapStateToProps = (state, ownProps) => {
    return {
        imageUrl: ownProps.imageUrl,
        name: ownProps.name,
        price: ownProps.price
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (item) => {
            dispatch(addCartItem(item))
            dispatch(cartIconNumberPlus())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem)