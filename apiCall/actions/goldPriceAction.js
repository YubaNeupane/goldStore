import * as API from "../Api";
export const GOLD_PRICE = "GOLD_PRICE";

export const goldPrice = () => async (dispatch) => {
  try {
    const { data } = await API.getGoldPrice();
    dispatch({ type: "GOLD_PRICE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
