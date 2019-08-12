import { SEARCH_ITEMS } from "../actions";
import { Products } from '../api/Products'

const initialState = {
    products:[],
    words: null
}

export const search = (state = initialState, action) => {
    switch(action.type){
        case SEARCH_ITEMS:
            const { items } = Products.getProducts()
            if(this.state.words === null){
                return {
                    ...state,
                    products: items
                }
            }else{
                return {
                    ...state,
                    products: items.find(p => p.includes(this.state.words))
                }
            }       
        default:
            return state
    }
}