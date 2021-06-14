import { connect } from "react-redux"

import GeneralShop from "../pages/shop-page/generalShop.component"

import { fetchShopDataStart } from "../redux/actions/shop-data-actions"

const mapStateToProps = (state) => {
    return { 
        shopData: state.shopData.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getShopData: () => {dispatch(fetchShopDataStart())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralShop)