import { GOLD_PRICE } from "../actions/goldPriceAction";
const initialState = {
    price: 0,
}
const goldPriceReducer = (state = initialState, action) => {
    switch(action.type){
        case GOLD_PRICE:
            const actualPrice =action.payload.price;
            const pricePerGram = (actualPrice + (actualPrice * .06))/31.1;
            return {...state,price: pricePerGram.toFixed(2)};
        default:
            return state;
    }
    return state;
}
export default goldPriceReducer;