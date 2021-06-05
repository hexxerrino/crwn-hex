
import { connect } from "react-redux"

import GeneralShop from "../pages/shop-page/generalShop.component"

const mapStateToProps = (state) => {
    return { 
        shopData: state.shopData
    }
}

export default connect(mapStateToProps)(GeneralShop)