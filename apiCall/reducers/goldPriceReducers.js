import { GOLD_PRICE } from "../actions/goldPriceAction";
const initialState = {
  price: 0,
};
const goldPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GOLD_PRICE":
      const actualPrice = action.payload[0].spreadProfilePrices[0].ask;

      const pricePerGram = (actualPrice + actualPrice * 0.06) / 31.1;
      return { ...state, price: pricePerGram.toFixed(2) };
    default:
      return state;
  }
};
export default goldPriceReducer;
