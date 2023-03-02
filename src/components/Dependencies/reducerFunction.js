
export const InitialState = {
    bodyHeight: "",
    staticNav: "",
    input: "",
    cart: {}
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
        case "cart":
            return {
                ...state,
                cart: {...state.cart,...action.payload}
            }
        default:
            return state
    }
}