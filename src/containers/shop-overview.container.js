import { connect } from "react-redux"
import { ShopOverview } from "../components/shop-overview/shop-overview.component"

import { dataForOverviewSelector } from "../redux/selectors/shop-data-selectors"

import WithSpinner from "../components/with-spinner/with-spinner.component"

const mapStateToProps = (state) => {
    return {
        shopData: dataForOverviewSelector(state),
        isLoading: !state.shopData.data
    }
}

export default connect(mapStateToProps)(WithSpinner(ShopOverview))