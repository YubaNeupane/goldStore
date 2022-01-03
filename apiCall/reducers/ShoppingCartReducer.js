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

      const data = {
        ...action.product,
        quantity: 1,
      };

      return {
        ...state,
        items: [...state.items, { ...data }],
        count: state.count + 1,
      };

    case "CLEAR_PRODUCT_SHOPPING_CART":
      return initialState;

    case "CHANGE_QUANITIY_PRODUCT_SHOPPING_CART":
      for (let i = 0; i < state.count; i++) {
        if (state.items[i]._id == action.payload.id) {
          state.items[i].quantity = action.payload.value;
          return { ...state };
        }
      }
      return { ...state };

    case "REMOVE_PRODUCT_SHOPPING_CART":
      const stateData = {
        ...state,
      };
      console.log(action.payload);

      const newData = stateData.items.filter(
        (item) => item._id !== action.payload
      );

      return { items: newData, count: state.count - 1 };
  }
  return state;
};
