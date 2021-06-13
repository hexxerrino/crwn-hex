import { connect } from "react-redux"

import App from "../App"

import { userUpdateState } from "../redux/actions/user-actions"

const mapStateToProps = (state) => {
    return {
        shopData: state.shopData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: () => { dispatch(userUpdateState()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)