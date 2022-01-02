const initialState = {
  count: 0,
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_SHOPPING_CART":
      const addedProduct = action.product._id;

      if (state.items[addedProduct]) {
        return { ...state };
      }

      for (let i = 0; i < state.count; i++) {
        if (state.items[i]._id == addedProduct) {
          return { ...state };
        }
      }

      return {
        ...state,
        items: [...state.items, action.product],
        count: state.count + 1,
      };

    case "CLEAR_PRODUCT_SHOPPING_CART":
      return initialState;
  }
  return state;
};
