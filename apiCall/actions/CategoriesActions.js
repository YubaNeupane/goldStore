import * as API from "../Api";

export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await API.getCategories();
    dispatch({ type: "GET_CATEGORIES", payload: data });
  } catch (error) {
    console.log(error);
  }
};
