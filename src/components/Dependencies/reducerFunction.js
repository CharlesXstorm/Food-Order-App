
export const InitialState = {
    bodyHeight: "",
    staticNav: ""
}

export const reducerFunction = (state, action) => {
    switch (action.type) {
        case "bodyHeight":
            return {
                ...state,
                bodyHeight: action.payload
            }
        case "staticNav":
            return {
                ...state,
                staticNav: action.payload
            }
        default:
            return state
    }
}