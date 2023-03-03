
export const InitialState = {
    bodyHeight: "",
    staticNav: "",
    input: "",
    cart: {},
    cartobj: [],
    cartno: ''
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
                cart: { ...state.cart, ...action.payload }
            }
        case "cartobj":
            return {
                ...state,
                cart: action.payload
            }
        case "cartno":
            return {
                ...state,
                cart: action.payload
            }
        default:
            return state
    }
}
