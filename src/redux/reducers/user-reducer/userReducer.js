const userReducer = (state = {}, action) => {
    if (action.type === "CHANGE-USER") {
        return {...action.user}
    } else {
        return state
    }
}

export default userReducer