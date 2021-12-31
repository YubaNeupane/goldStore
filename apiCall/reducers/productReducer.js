import { ADD_PRODUCT } from "../actions/productAction";

const initialState = []

const addProduct = (state = initialState, action) => {
    switch(action.type){
        case "ADD_PRODUCT":
            return action.payload;
                
        default:
            return state;
    }
}
export default addProduct;