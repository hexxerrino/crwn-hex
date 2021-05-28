import { connect } from "react-redux"

import { Header } from "../components/header-component/header.component"

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cartPopup: state.cartPopup
    }
}

export default connect(mapStateToProps)(Header)