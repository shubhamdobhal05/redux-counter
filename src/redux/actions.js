export const addCount = (payload) => {
    return {
        type: "INCREMENT_COUNTER",
        payload
    }
}


export const deleteCount = (payload) => {
    return {
        type: "DECREMENT_COUNTER",
        payload
    }
}