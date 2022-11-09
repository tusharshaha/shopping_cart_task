const initialCart = {
    items: []
}

export default function cartReducer(state = initialCart, action) {
    switch (action.type) {
        case "ADD":
            const prevState = [...state.items, action.payload];
            state.items = prevState;
            return state

        default:
            return state
    }
}