const shopDataReducer = (state = null, action) => {
    if (action.type === "SET-DATA") {
        return {...action.data}
    } else {
        return state 
    }
}

export default shopDataReducer