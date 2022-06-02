const initState = {
    count: 0
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "INCREMENT_COUNTER":
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREMENT_COUNTER":
            return {
                ...state,
                count: state.count - 1

            }
        default:
            return state;
    }

}

export default reducer