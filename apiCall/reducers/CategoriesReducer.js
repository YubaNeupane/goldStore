const initialState = [];

const Categories = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return action.payload;

    default:
      return state;
  }
};
export default Categories;
