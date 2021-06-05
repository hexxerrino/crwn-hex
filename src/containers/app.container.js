import { connect } from "react-redux"

import App from "../App"

const mapStateToProps = (state) => {
    return {
        shopData: state.shopData
    }
}

export default connect(mapStateToProps)(App)