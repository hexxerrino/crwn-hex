import { connect } from "react-redux"
import { ShopOverview } from "../components/shop-overview/shop-overview.component"

import { dataForOverviewSelector } from "../redux/selectors/shop-data-selectors"

const mapStateToProps = (state) => {
    return {
        shopData: dataForOverviewSelector(state)
    }
}

export default connect(mapStateToProps)(ShopOverview)