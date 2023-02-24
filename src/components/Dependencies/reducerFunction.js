
export const InitialState = {
    bodyHeight: "",
    staticNav: "",
    input: ""
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
        case "input":
            return {
                ...state,
                input: action.payload
            }
        default:
            return state
    }
}