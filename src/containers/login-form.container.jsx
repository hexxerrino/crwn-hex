import { connect } from 'react-redux'

import { LoginForm } from "../components/forms/login-form.component"

import { userLoginGoogleStart, userLoginLocalStart } from "../redux/actions/user-actions"

const mapDispatchToProps = (dispatch) => {
    return {
        googleLogin: () => { dispatch(userLoginGoogleStart()) },
        localLogin: (user) => { dispatch(userLoginLocalStart(user)) }
    }
}

export default connect(null, mapDispatchToProps)(LoginForm)