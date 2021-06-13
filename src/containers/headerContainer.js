import { connect } from "react-redux"

import { Header } from "../components/header-component/header.component"

import { logoutUserStart } from "../redux/actions/user-actions"

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        cartPopup: state.cartPopup
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {dispatch(logoutUserStart())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)