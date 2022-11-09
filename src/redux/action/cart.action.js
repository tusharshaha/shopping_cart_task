export function addToCart(items) {
    return {
        type: "ADD",
        payload: items
    }
}