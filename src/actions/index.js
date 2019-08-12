export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SEARCH_ITEMS = 'SEARCH_ITEMS'

export const addToCart = product => ({
    type: ADD_TO_CART,
    product
})

export const removeFromCart = product =>({
    type: REMOVE_FROM_CART,
    product
})

export const searchItems = products => ({
    type: SEARCH_ITEMS,
    products
})
