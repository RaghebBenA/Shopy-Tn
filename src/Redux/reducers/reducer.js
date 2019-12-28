import {PRODUCT_FETCH} from "../actions/types"
import {combineReducers} from "redux"


 function productsReducer (state= [],actions){
    switch(actions.type){
        case PRODUCT_FETCH:
            return actions.payload
        default:
            return state
    }

}


export default combineReducers({
    products: productsReducer
})


