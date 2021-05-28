const shopDataReducer = (state = [], action) => {
    if (action.type === "CHANGE-ALL-DATA") {
        return [...action.data]
    } else {
        return state
    }
}

export default shopDataReducer