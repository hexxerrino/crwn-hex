import { connect } from "react-redux"
import { ShopOverview } from "../components/shop-overview/shop-overview.component"

const mapStateToProps = (state) => {
    return {
        shopData: state.shopData
    }
}

export default connect(mapStateToProps)(ShopOverview)