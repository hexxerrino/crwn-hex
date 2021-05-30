const shopDataReducer = (state = [], action) => {
    if (action.type === "SET-DATA") {
        return [...action.data]
    } else {
        return state 
    }
}

export default shopDataReducer