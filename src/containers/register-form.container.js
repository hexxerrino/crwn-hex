import { connect } from 'react-redux'

import { RegisterForm } from "../components/forms/register-form.component"

import { userRegisterStart } from "../redux/actions/user-actions"

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (user) => { dispatch(userRegisterStart(user)) }
    }
}

export default connect(null, mapDispatchToProps)(RegisterForm)